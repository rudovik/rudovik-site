const browserSync = require('browser-sync').get('srv');
const importCss = require('postcss-import');
const cssVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');
const doPostcss = require('gulp-postcss');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');
const {src, dest, task, series} = require('gulp');

function processCss () {
	return src('./app/assets/styles/styles.css').
		pipe(doPostcss([
			importCss, mixins,
			cssVars, autoprefixer,
			nested, hexrgba
		])).
		pipe(dest('./app/temp/styles'));
}

function cssInject () {
	return src('./app/temp/styles/styles.css').
		pipe(browserSync.stream());
}

task('doStyles', series(processCss, cssInject));
