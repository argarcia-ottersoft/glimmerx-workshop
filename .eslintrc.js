module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        '@glimmerx'
    ],
    "rules": {
        '@glimmerx/template-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
};
