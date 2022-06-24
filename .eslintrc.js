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
		"@vue/typescript/recommended",
	],
	"parserOptions": {
		"ecmaVersion": 2021
	},
	"parser": "vue-eslint-parser",
	"plugins": [],
	"overrides": [
		{
			"files": ["*.vue"],
			"rules": {
				"indent": "off"
			}
		}
	],
	"rules": {
		"indent": ["error", "tab", { "VariableDeclarator": "first", "MemberExpression": 1, "ObjectExpression": 1 }],
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
		"no-console": "warn",
		"no-debugger": "warn",
		"vue/multi-word-component-names": 0,
		"object-curly-spacing": ["error", "always"],
		"quotes": [
			"error",
			"double",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxEOF": 0
			}
		],
	}
}
