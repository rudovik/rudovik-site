module.exports = {
	entry: "./app/assets/scripts/App.js",
	mode: "development",
	module: {
		rules: [
			{
				exclude: /node_modules/u,
				loader: "babel-loader",
				test: /\.js$/u
			}
		]
	},
	output: {
		filename: "App.js",
		path: "/home/rudovik/Desktop/Sites/rudovik-site/app/temp/scripts"
	}
};
