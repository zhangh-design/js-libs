module.exports = {
	root: true,
	parser: 'babel-eslint',
	// eslint:recommended
	extends: 'standard',
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