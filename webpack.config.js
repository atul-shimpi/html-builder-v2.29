const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		builder: './assets/js/builder.js'
	},
	output: {
		path: __dirname + '/build/bundles/',
		publicPath: './bundles/',
		filename: '[name].bundle.js'
	},
    devServer: {
        outputPath: __dirname + '/build/'
    },
	module: {
		preLoaders: [
            {
                test: /\.js$/,
                include: [
                	/js\/modules/,
                	/js\/[a-z]*.js$/
                ],
                loader: "jshint-loader"
            }
        ],
        loaders: [
        	{
        		test: /\.css$/,
                loader: "style-loader!css-loader"
        	},
        	{
        		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        		loader: 'url?limit=10000'
        	},
        	{
        		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'file'
        	},
        	{
        		test: /\.(woff(\?v=\d+\.\d+\.\d+)|woff2(\?v=\d+\.\d+\.\d+)|woff|woff2)$/,
        		loader: 'url?limit=5000&mimetype=application/font-woff'
        	},
        	{
        		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url?limit=10000&mimetype=application/octet-stream'
        	},
        	{
        		test: /\.(jpe?g|png|gif)$/i,
        		loader: 'url?limit=10000!img?progressive=true'
        	}
        ],
	},
	devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true, 
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: "assets/html/index.html",
            filename: __dirname + "/build/index.html"
        }),
        new CopyWebpackPlugin([
            {from: 'assets/json/elements.json', to: __dirname + '/build/elements.json'},
            {from: 'assets/json/site.json', to: __dirname + '/build/site.json'},
            {from: 'assets/server/_export.php', to: __dirname + '/build/_export.php'},
            {from: 'assets/server/_preview.php', to: __dirname + '/build/_preview.php'},
            {from: 'assets/server/_save.php', to: __dirname + '/build/_save.php'},
            {from: 'assets/server/_upload.php', to: __dirname + '/build/_upload.php'},
            {from: 'assets/elements', to: __dirname + '/build/elements'},
            {from: 'assets/tmp', to: __dirname + '/build/tmp'},
            {from: 'assets/css/medium-bootstrap.css', to: __dirname + '/build/elements/css/medium-bootstrap.css'}
        ])
    ]
}