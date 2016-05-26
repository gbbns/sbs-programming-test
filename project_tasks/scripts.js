import standard from 'gulp-standard'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

module.exports = function (gulp, config, argv) {
  gulp.task('scripts', function () {
    let source = [];

    source.push(config.paths.source.scripts + '/**/*.js');

    return gulp.src(source)
      .pipe(standard())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('main.js'))
      .pipe(gulp.dest(config.paths.build.scripts));
  });

};
