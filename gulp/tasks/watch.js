module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
    $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'))
	});
}
