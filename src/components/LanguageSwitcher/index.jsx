/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag"

import { setLanguage, selectCurrentLanguage, selectSupportedLanguages } from "../../store/slices/languageSlice";

import "./LanguageSwitcher.scss";

function LanguageSwitcher() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);
  const supportedLanguages = useSelector(selectSupportedLanguages);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Language options with flags
  const languageOptions = {
    en: {
      name: t('languageSwitcher.english'),
      flag: "us"
    },
    ru: {
      name: t('languageSwitcher.russian'),
      flag: "ru"
    }
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <ReactCountryFlag countryCode={languageOptions[currentLanguage].flag} svg /> {t('languageSwitcher.language')}
      </button>

      {isOpen && (
        <ul className="language-switcher__dropdown">
          {supportedLanguages.map((language) => (
            <li className="language-switcher__item" key={language}>
              <button
                className={`language-switcher__option ${language === currentLanguage ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language)}
              >
                <ReactCountryFlag countryCode={languageOptions[language].flag} svg /> {languageOptions[language].name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
