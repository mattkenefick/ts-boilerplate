const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		main: './src/index.ts',
	},
	mode: 'development',
	module: {
		rules: [
			{
				loader: 'ts-loader',
				test: /\.tsx?$/,
			},
		],
	},
	output: {
		filename: 'boilerplate-ts.js',
		path: path.resolve(__dirname, './build'),
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		fallback: {
			// Ignore the filesystem resolution in Storage/Local because sometimes
			// this library will be used by a node project rather than web
			fs: false,
			util: require.resolve('util/'),
		},
	},
};
