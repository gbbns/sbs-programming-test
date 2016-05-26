import browserSync from 'browser-sync';

module.exports = function (gulp, config) {
  gulp.task('browser-sync', () => {
    browserSync.create().init({
      browser: 'google chrome',
      files: [config.paths.build.base + '**/*'],
      server: {
        baseDir: config.paths.build.base
      },
      watchOptions: {
        ignored: '**/*.DS_Store'
      }
    });
  });
};
