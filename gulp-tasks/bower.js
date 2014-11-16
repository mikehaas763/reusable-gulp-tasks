'use strict';

var gulp = require('gulp');
var buildConfig = require('../build-config.json');

gulp.task('bower', function() {
  return gulp.src(buildConfig.dev.globs.vendor.javascript, { base: '.' })
    .pipe(gulp.dest(buildConfig.dev.buildDir));
});
