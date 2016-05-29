import gulp from 'gulp';
import mochaPhantomJS from 'gulp-mocha-phantomjs';

module.exports = function (gulp, config, argv) {

  gulp.task('tests', function () {
      return gulp
      .src('test/testRunner.html')
      .pipe(mochaPhantomJS({reporter: 'spec', dump:'test.log'}));
  });

};
