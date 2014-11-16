'use strict';

var buildConfig = require('../build-config.json');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', ['sass'], function() {
  return gulp.src(buildConfig.dev.globs.vendor.css, { base: '.' })
    .pipe(gulp.dest(buildConfig.dev.buildDir));
});

gulp.task('sass', function () {
  return gulp.src(buildConfig.dev.globs.sass)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(buildConfig.dev.buildDir));
});
