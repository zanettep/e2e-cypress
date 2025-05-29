const eslintPluginCypress = require('eslint-plugin-cypress')

module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            cypress: eslintPluginCypress,
        },
        rules: {
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'no-trailing-spaces': 'error',
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
            'indent': ['error', 4],
            'no-console': 'error',
            'no-unused-vars': 'error',
            'cypress/no-unnecessary-waiting': 'off',
            'cypress/assertion-before-screenshot': 'error',
        },
    },
]