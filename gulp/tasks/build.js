const {task, series, src, dest} = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require("del");
const usemin = require("gulp-usemin");
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

task('previewDist', () => {
	browserSync.init({
		notify: false,
		server: "docs"
	});
});

task('deleteDistFolder', () => {
	return del("./docs");
});

task('copyGeneralFiles', () => {
	const pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	];

	return src(pathsToCopy).
		pipe(dest("./docs"));
});

task('optimizeImages', () => {
	return src([
		'./app/assets/images/**/*',
		'!./app/assets/images/icons',
		'!./app/assets/images/icons/**/*'
	]).
		pipe(imagemin({
			interlaced: true,
			multipass: true,
			progressive: true
		})).
		pipe(dest("./docs/assets/images"));
});

task('usemin', () => {
	return src("./app/index.html").
		pipe(usemin({
			css: [rev, cssnano],
			js: [rev, uglify]
		})).
		pipe(dest('./docs'));
});

task('build', series(
	'icons', 'doStyles', 'scripts',
	'deleteDistFolder', 'copyGeneralFiles',
	'optimizeImages', 'usemin'
));
