'use strict';

var del = require('del');
var gulp = require('gulp');
var buildConfig = require('../build-config.json');

gulp.task('clean', function(callback) {
  del(buildConfig.dev.buildDir, callback);
});
