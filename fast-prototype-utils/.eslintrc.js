module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
	},
	extends: [
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	// required to lint *.vue files
	plugins: ['html'],
	// add your custom rules here
	rules: {
		'semi': "off",
		'no-debugger': "off",
		'quotes': ["error", "single"],
		'object-curly-spacing': ["error", "always"]
	},
	"globals": {
		'alert': true,
		'values': true,
		'entries': true
	}
}