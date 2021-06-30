const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
	mode: 'development',
	watchOptions: {
		ignored: '/node_modules/',
	},
	devtool: 'inline-source-map',
	devServer: {
		compress: false,
		historyApiFallback: true,
		hot: true,
		port: 5000,
	},
});
