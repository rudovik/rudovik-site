module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	mode: "production",
	module: {
		rules: [
			{
				exclude: /node_modules/u,
				test: /\.js$/u,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	output: {
		filename: "[name].js",
		path: "/home/rudovik/Desktop/Sites/rudovik-site/app/temp/scripts"
	}
};
