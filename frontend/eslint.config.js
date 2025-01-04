import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {Linter.Config} */
export default [
  {
    languageOptions: {
      ecmaVersion: 2021, // ECMAScript 2021 (latest version)
      sourceType: 'module', // Enable ES modules support
      globals: {
        browser: true, // Declaring browser as a global variable (for React)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support for React
        },
      },
    },

    plugins: {
      react: reactPlugin, // React plugin for linting JSX and React-related code
      'react-hooks': reactHooksPlugin, // React hooks plugin for enforcing best practices
      prettier: prettierPlugin, // Prettier integration with ESLint
    },

    rules: {
      // React-specific rules
      'react/prop-types': 'off', // Disable prop-types as you're likely using TypeScript or not using them
      'react/jsx-uses-react': 'off', // React 17+ doesn't require `React` in scope
      'react/jsx-uses-vars': 'error', // Ensure JSX variables are properly used

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error', // Ensures hooks are used correctly
      'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in hooks

      // Code quality rules (production level)
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow console.warn and console.error, but warn for others
      'no-debugger': 'warn', // Warn about debugger usage
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Disallow unused variables unless they start with '_'
      eqeqeq: 'error', // Enforce strict equality (===)
      'consistent-return': 'warn', // Enforce consistent return statements
      curly: ['error', 'all'], // Require curly braces for all control statements (if, else, for, etc.)
      'no-duplicate-imports': 'error', // Disallow duplicate imports
      'no-undef': 'error', // Ensure variables are defined before use
      'no-restricted-syntax': ['error', 'WithStatement'], // Disallow `with` statements (helps avoid unexpected behavior)

      // Performance optimization (strict rules)
      'max-lines': [
        'warn',
        { max: 500, skipBlankLines: true, skipComments: true }, // Limit file size (500 lines max)
      ],
      complexity: ['error', { max: 10 }], // Limit function complexity to 10 (simpler code)
      'max-nested-callbacks': ['error', 3], // Limit nested callbacks to 3 levels (prevents callback hell)
      'no-magic-numbers': ['warn', { ignore: [0, 1] }], // Disallow magic numbers in code (except for 0 and 1)
      'no-eval': 'error', // Disallow usage of eval (security risk)
      'no-new-func': 'error', // Disallow usage of Function constructor (security risk)

      // Security-related rules
      'no-implied-eval': 'error', // Disallow usage of `setTimeout`, `setInterval`, and `execScript` with function arguments (security risk)
      'no-unsafe-finally': 'error', // Disallow `return`, `throw`, `continue`, and `break` in `finally` blocks (hard-to-debug)
    },

    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  },

  {
    files: ['**/*.jsx', '**/*.js'], // Apply only to JS and JSX files
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
