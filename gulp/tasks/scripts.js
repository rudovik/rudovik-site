const {task} = require('gulp');
const webpack = require('webpack');
const config = require('../../webpack.config.js');
const browserSync = require('browser-sync').get('srv');

function scripts (cb) {
	webpack(config, (err, stats) => {
		console.log(stats.toString());
		if (err) {
			console.log(err.toString());
		}
		browserSync.reload();
		cb();
	});
}

task('scripts', scripts);
