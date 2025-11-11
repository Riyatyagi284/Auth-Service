import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      import: importPlugin,
    },
    // root: true,
    rules: {
      // Enforce import/export syntax
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/export': 'error',

      // Prevent usage of variables before they are defined
      'no-use-before-define': 'error',
      'no-console': 'error',
      'dot-notation': 'error',

      // Enforce consistent quote style (single quotes)
      quotes: ['error', 'single', { avoidEscape: true }],

      // Require semicolons
      semi: ['error', 'always'],

      // Disallow unused variables
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  prettierConfig,
];
