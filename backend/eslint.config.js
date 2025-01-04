// eslint.config.js

module.exports = [
  {
    // For backend and React JavaScript files
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      node: require('eslint-plugin-node'),
      import: require('eslint-plugin-import'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'node/no-missing-import': 'off',
      'node/no-unpublished-require': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'warn',
      eqeqeq: ['error', 'always'],
      'no-duplicate-imports': 'error',
      'no-shadow': 'warn',
      'prefer-const': 'error',
      'consistent-return': 'warn',
    },
  },
  {
    // For testing files (e.g., .test.js, .test.jsx)
    files: ['**/*.test.js', '**/*.test.jsx'],
    env: {
      jest: true, // Enable Jest environment for test files
    },
    rules: {
      'no-unused-expressions': 'off',
    },
  },
];
