'user strict'
/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
	return path.join(__dirname, '.', dir)
}

module.exports = {
	entry: {
		'loader-api': './src/index.js',
		'loader-api.min': './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		library: 'LoaderApiLibrary',	//指定库的全局变量
		libraryExport: 'default',		//默认即使用LoaderApiLibrary为插件的全局变量名
		libraryTarget: 'umd'			//通用模块，支持库引入的方式 AMD、CJS、EM module、CDN
	},
	// mode: 'development',
	// mode: 'production',
	mode: 'none',
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
		  '@': resolve('src')
		}
  },
  externals: {axios: 'axios'},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'/* ,{
					// 如果运行 npm run build 命令出现找不到 `eslint`，可以先安装其它插件包然后在单独执行 cnpm install eslint-loader eslint-friendly-formatter -D
					// 如果还是有问题可以注释这个eslint-loader
					loader: 'eslint-loader',
					options: {
						fix: true,
						formatter: require('eslint-friendly-formatter')
					}
				} */],
				include: [resolve('src')]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
    new LodashWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				include: /\.min\.js$/
			})
    ]
	},
	devtool: 'cheap-module-source-map'
}

