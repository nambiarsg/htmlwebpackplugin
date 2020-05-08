const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "development",
	devtool: "none",
	entry: "./src/app.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname,"dist")
	},
	plugins: [new HtmlWebpackPlugin()]
};