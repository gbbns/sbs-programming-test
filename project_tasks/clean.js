import del from 'del';

module.exports = function (gulp, config, argv) {
  gulp.task('clean', function () {
    return del([
      config.paths.build.base
    ]);
  });
};
