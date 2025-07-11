import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^[A-Z_]',
        args: 'none'
      }]
    }
  },
  prettier // Добавляем конфигурацию Prettier в конец, чтобы она переопределила конфликтующие правила ESLint
]
// This ESLint configuration is tailored for a React project using Vite and SWC.
// It includes rules for React hooks and refresh, and is compatible with the latest versions of the
// relevant packages. The configuration is designed to work with the specified versions in the package.json file
// and is suitable for a modern JavaScript environment.
// Prettier integration is added to ensure consistent code formatting.