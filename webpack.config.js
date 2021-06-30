const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const PATHS = {
	app: path.join(__dirname, 'src/index.js'),
	output: path.join(__dirname, 'dist'),
	template: path.join(__dirname, 'index.html'),
};

module.exports = {
	entry: PATHS.app,

	output: {
		path: PATHS.output,
		filename: 'build.js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: PATHS.template,
			filename: 'index.html',
		}),
		new ESLintWebpackPlugin({
			files: 'src/**/*.(js|jsx)',
		}),
	],
};
