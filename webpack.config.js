const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'public')
	},

	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
}