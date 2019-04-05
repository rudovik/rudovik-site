module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
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
		filename: "[name].js",
		path: "/home/rudovik/Desktop/Sites/rudovik-site/app/temp/scripts"
	}
};
