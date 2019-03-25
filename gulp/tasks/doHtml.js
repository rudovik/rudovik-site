const browserSync = require('browser-sync').get('srv');
const {task, src} = require('gulp');

function doHtml () {
	return src('./app/index.html').pipe(browserSync.stream());
}

task(doHtml);
