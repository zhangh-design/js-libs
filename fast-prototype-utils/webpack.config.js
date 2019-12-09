'user strict'
/* eslint-disable */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const lodashWebpackPlugin = require('lodash-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		'fast-prototype-utils': './src/index.js',
		'fast-prototype-utils.min': './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		library: 'FastPrototypeUtilsLibrary',	//指定库的全局变量
		libraryExport: 'default',		//默认即使用LoaderApiLibrary为插件的全局变量名
		libraryTarget: 'umd'			//支持库引入的方式 AMD、CJS、EM module、CDN
	},
	// mode: 'development',
	mode: 'none',
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
		  '@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
				include: [resolve('src'), resolve('test')]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new lodashWebpackPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new terserPlugin({
				include: /\.min\.js$/
			})
		]
	},
	devtool: 'source-map'
}

