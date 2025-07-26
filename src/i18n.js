/**
 * i18next configuration
 * Configuration for internationalization with API support, localStorage caching and monitoring
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Cache manager for localStorage
class LocalStorageCache {
  constructor(expirationTime) {
    this.expirationTime = expirationTime || 7 * 24 * 60 * 60 * 1000; // 1 week by default
  }

  read(language, namespace) {
    const key = `i18next_${language}_${namespace}`;
    const cache = localStorage.getItem(key);

    if (!cache) return null;

    try {
      const parsedCache = JSON.parse(cache);
      const { timestamp, data, version } = parsedCache;

      // Check if cache is expired
      if (Date.now() - timestamp > this.expirationTime) {
        localStorage.removeItem(key);
        return null;
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`[i18next] Using cached translations for '${language}/${namespace}', version: ${version}`);
      }

      return data;
    } catch (error) {
      localStorage.removeItem(key);
      return null;
    }
  }

  save(language, namespace, data, version) {
    try {
      const key = `i18next_${language}_${namespace}`;
      const cacheData = {
        timestamp: Date.now(),
        version: version || new Date().toISOString(),
        data
      };

      localStorage.setItem(key, JSON.stringify(cacheData));

      if (process.env.NODE_ENV === 'development') {
        console.log(`[i18next] Cached translations for '${language}/${namespace}'`);
      }
    } catch (error) {
      console.error('[i18next] Error caching translations:', error);
    }
  }
}

// Custom backend with API support
const customBackend = {
  type: 'backend',
  init: function(services, backendOptions) {
    this.services = services;
    this.options = backendOptions;
  },
  read: function(language, namespace, callback) {
    // Check cache first
    const cache = new LocalStorageCache();
    const cachedData = cache.read(language, namespace);

    if (cachedData) {
      return callback(null, cachedData);
    }

    // Determine URL based on environment
    let url = this.options.loadPath;

    // For future API implementation
    const isApiEnabled = false; // Toggle this based on environment or config

    if (isApiEnabled) {
      url = `${process.env.REACT_APP_API_URL || 'https://api.example.com'}/translations/${language}/${namespace}`;
    }

    // Replace placeholders in URL
    url = url.replace('{{lng}}', language).replace('{{ns}}', namespace);

    if (process.env.NODE_ENV === 'development') {
      console.log(`[i18next] Fetching translations from: ${url}`);
    }

    // Fetch translations
    fetch(url, this.options.requestOptions)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        // Extract version if present
        let version = 'unknown';
        let translations = data;

        if (data.version && data.translations) {
          version = data.version;
          translations = data.translations;
        }

        // Cache the translations
        cache.save(language, namespace, translations, version);

        callback(null, translations);
      })
      .catch(error => {
        console.error('[i18next] Error loading translations:', error);
        callback(error, null);
      });
  }
};

// Initialize i18next
i18n
  // Load translations using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize configuration
  .init({
    // Default language
    fallbackLng: 'en',
    // Supported languages
    supportedLngs: ['en', 'ru'],
    // Default namespace
    defaultNS: 'translation',
    // Don't load a fallback in development to make missing translations obvious
    fallbackNS: false,

    // Backend configuration
    backend: {
      // Path to translations
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // Custom backend for API support (uncomment when ready to use)
      // backend: customBackend,

      // Request options for API calls
      requestOptions: {
        // Additional headers for API
        headers: {
          'Accept': 'application/json'
          // Authorization headers can be added here for protected APIs
        }
      }
    },

    // Detection options
    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator'],
      // Cache user language
      caches: ['localStorage'],
      // Cookie expiration
      cookieExpirationDate: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000), // 2 years
      // Cookie domain
      cookieDomain: window.location.hostname
    },

    // Interpolation options
    interpolation: {
      // React already escapes by default
      escapeValue: false,
      // Format function for date/time/number formatting
      format: (value, format, lng) => {
        if (format === 'DATE_FULL') {
          // Format dates based on language
          const dateFormat = lng === 'ru' ?
            'd MMMM yyyy \'г.\'' :
            'MMMM d, yyyy';
          // Implementation with date-fns would go here
          return new Date(value).toLocaleDateString(lng === 'ru' ? 'ru-RU' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
        if (format === 'TIME') {
          // Format time based on language
          return new Date(value).toLocaleTimeString(lng === 'ru' ? 'ru-RU' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit'
          });
        }
        // Add new format with seconds
        if (format === 'TIME_WITH_SECONDS') {
          // Format time with seconds based on language
          return new Date(value).toLocaleTimeString(lng === 'ru' ? 'ru-RU' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
      }
        return value;
      }
    },

    // Debug options for development
    debug: process.env.NODE_ENV === 'development',
    saveMissing: process.env.NODE_ENV === 'development',

    // React options
    react: {
      useSuspense: true
    }
  });

// Add monitoring in development mode
if (process.env.NODE_ENV === 'development') {
  i18n.on('initialized', () => {
    console.log(`[i18next] Initialized with languages: ${i18n.options.supportedLngs.join(', ')}`);
  });

  i18n.on('loaded', (loaded) => {
    console.log(`[i18next] Loaded translations:`, loaded);
  });

  i18n.on('failedLoading', (lng, ns, msg) => {
    console.error(`[i18next] Failed loading '${lng}/${ns}': ${msg}`);
  });

  i18n.on('missingKey', (lngs, namespace, key) => {
    console.warn(`[i18next] Missing key: '${key}' in namespace: '${namespace}' for languages: ${lngs.join(', ')}`);
  });
}

export default i18n;
