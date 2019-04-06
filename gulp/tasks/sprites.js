const config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: () => {
					return (sprite, render) => {
						return render(sprite).split('.svg').join('.png');
					};
				}
			},
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			},
			sprite: 'sprite.svg'
		}
	}
};
const del = require('del');
const rename = require('gulp-rename');
const {task, src, dest, series} = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svg2png = require('gulp-svg2png');

task('createSprite', () => {
	return src('./app/assets/images/icons/**/*.svg').
		pipe(svgSprite(config)).
		pipe(dest('./app/temp/sprite/'));
});

function createPngCopy () {
	return src('./app/temp/sprite/css/*.svg').
		pipe(svg2png()).
		pipe(dest('./app/temp/sprite/css'));
}
task('createPngCopy', series('createSprite', createPngCopy));

task('copySpriteCSS', () => {
	return src('./app/temp/sprite/css/*.css').
		pipe(rename('_sprite.css')).
		pipe(dest('./app/assets/styles/modules'));
});

task('copySpriteGraphic', () => {
	return src('./app/temp/sprite/css/**/*.{svg,png}').
		pipe(dest('./app/assets/images/sprites'));
});

task('beginClean', () => {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

task('endClean', () => {
	return del('./app/temp/sprite');
});

task('icons', series(
	'beginClean', 'createPngCopy',
	'copySpriteCSS', 'copySpriteGraphic',
	'endClean'
));
