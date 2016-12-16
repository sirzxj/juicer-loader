module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [{
			test: /\.juicer.html$/,
			loader: 'juicer-loader'
		}]
	}
};