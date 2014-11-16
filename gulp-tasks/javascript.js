'use strict';

var buildConfig = require('../build-config.json');
var concat = require('gulp-concat');
var gulp = require('gulp');
var footer = require('gulp-footer');
var header = require('gulp-header');
var source = require('vinyl-source-stream');
var sourceMaps = require('gulp-sourcemaps');
var yargs = require('yargs');

var args = yargs.default('type', 'development').argv;

gulp.task('javascript', function() {
  return gulp.src(buildConfig.dev.globs.javascript)
    .pipe(sourceMaps.init())
    .pipe(header('(function() {\'use strict\';'))
    .pipe(footer('}());'))
    .pipe(concat('app.js'))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(buildConfig.dev.buildDir));
});
