'use strict'

import gulp from 'gulp';
import yargs from 'yargs';
import runSeq from 'run-sequence';
const argv = yargs.argv;

/* ============================================================ *\
	CONFIG
\* ============================================================ */

const config = {
  paths: require('./project_config/paths.json'),
  stylelint: require('./project_config/stylelint.json')
};


/* ============================================================ *\
    Require tasks
\* ============================================================ */

require('./project_tasks/clean.js')(gulp, config, argv);
require('./project_tasks/html.js')(gulp, config, argv);
require('./project_tasks/scripts.js')(gulp, config, argv);
require('./project_tasks/server.js')(gulp, config, argv);
require('./project_tasks/styles.js')(gulp, config, argv);

require('./project_tasks/tests.js')(gulp, config, argv);

/* ============================================================ *\
    Gulp tasks
\* ============================================================ */

gulp.task('watch', function () {
  gulp.watch([
    config.paths.source.sass + '/**/*.scss'
  ], ['styles']);

  gulp.watch([
    config.paths.source.base + '/**/*.html'
  ], ['html']);

  gulp.watch([
    config.paths.source.base + '/**/*.js'
  ], ['scripts']);
});

gulp.task('default', function (callback) {
  runSeq(
    'clean',
    'fonts',
    'styles',
    'scripts',
    'html',
    'watch',
    'browser-sync'
  );
});

gulp.task('tdd', function (callback) {
  runSeq(
    'tests'
  );
});
