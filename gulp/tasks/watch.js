const browserSync = require('browser-sync').create('srv');
const {task, series, watch} = require('gulp');

function watchTask (cb) {
	browserSync.init({
		notify: false,
		server: "app"
	});

	watch(['app/index.html'], series('doHtml'));

	watch(
		[
			'.app/assets/styles/*.css',
			'./app/assets/styles/modules/*.css',
			'./app/assets/styles/base/*.css'
		],
		series('doStyles')
	);

	watch(
		[
			'./app/assets/scripts/*.js',
			'.app/assets/scripts/modules/.*js'
		],
		series('scripts')
	);

	cb();
}

task('default', watchTask);
