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

	watch(
		['./app/assets/scripts/**/*.js'],
		series('scripts')
	);

	cb();
}

task('default', watchTask);
