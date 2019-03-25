const browserSync = require('browser-sync').create('srv');
const {task, series, watch} = require('gulp');

function watchTask (cb) {
	browserSync.init({
		notify: false,
		server: "app"
	});

	watch(['app/index.html'], series('doHtml'));

	watch(
		['./app/assets/styles/**/*.css'],
		series('doStyles')
	);
	cb();
}

task('default', watchTask);
