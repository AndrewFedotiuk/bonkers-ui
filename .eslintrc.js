module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2021
    },
    "plugins": [],
    "rules": {
        "vue/html-indent": [
            "error",
            "tab",
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true
            }
        ],
        "vue/script-indent": [
            "error",
            "tab",
            {
                "baseIndent": 1,
                "switchCase": 1,
            }
        ],
        "eol-last": [
            "error",
            "always"
        ],
        'no-console': "warn",
        'no-debugger': "warn"
    }
}
