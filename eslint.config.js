import eslintConfigPrettier from 'eslint-config-prettier'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImport from 'eslint-plugin-import'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'], // тільки TS файли
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // *** ЗМІНА ТУТ ***
        // Використовуємо projectService для коректної роботи з Project References
        project: './tsconfig.json',
        projectService: true,
      }
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      import: eslintPluginImport,
      '@typescript-eslint': tsPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules, // додали рекомендовані правила TS
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'import/no-anonymous-default-export': 'off',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      semi: ['error', 'never']
    }
  }
]
