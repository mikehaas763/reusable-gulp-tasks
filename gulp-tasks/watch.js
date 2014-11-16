'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var buildConfig = require('../build-config.json');

gulp.task('watch', function() {
  runSequence('clean', 'build');

  gulp.watch(buildConfig.dev.globs.html, ['html']);
  gulp.watch(buildConfig.dev.globs.javascript, ['javascript']);
  gulp.watch(buildConfig.dev.globs.sassWatch, ['sass']);
});
