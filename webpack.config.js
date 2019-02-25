const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				}),
			},
			{
				exclude: /node_modules/,
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				exclude: /node_modules/,
				test: /\.(jpe?g|gif|png|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/',
							publicPath: 'assets/',
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new HTMLWebpackPlugin({
			template: 'src/index.html',
		}),
		new CleanWebpackPlugin(['dist']),
	],
};
