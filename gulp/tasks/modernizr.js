const {task, src, dest} = require('gulp');
const modernizr = require('gulp-modernizr');

task('modernizr', () => {
	return src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js']).
		pipe(modernizr({
			options: ["setClasses"]
		})).
		pipe(dest('./app/temp/scripts'));
});
