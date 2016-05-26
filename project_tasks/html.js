module.exports = function (gulp, config, argv) {
  // Copy html
  gulp.task('html', function () {
    return gulp.src(config.paths.source.base + '**/*.html')
      .pipe(gulp.dest(config.paths.build.base));
  });
};
