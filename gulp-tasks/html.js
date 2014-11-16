'use strict';

var buildConfig = require('../build-config.json');
var gulp = require('gulp');
var linker = require('gulp-linker');

gulp.task('html', ['javascript', 'styles'], function() {
  return gulp.src(buildConfig.dev.globs.html)
    .pipe(linker({
      scripts: buildConfig.dev.globs.vendor.css,
      startTag: '<!--STYLES:VENDOR-->',
      endTag: '<!--STYLES END-->',
      fileTmpl: '<link rel="stylesheet" href="%s"/>',
      appRoot: '',
      relative: true
    }))
    .pipe(linker({
      scripts: ['build/styles.css'],
      startTag: '<!--STYLES-->',
      endTag: '<!--STYLES END-->',
      fileTmpl: '<link rel="stylesheet" href="%s"/>',
      appRoot: 'build',
      relative: true
    }))
    .pipe(linker({
      scripts: buildConfig.dev.globs.vendor.javascript,
      startTag: '<!--SCRIPTS:VENDOR-->',
      endTag: '<!--SCRIPTS END-->',
      fileTmpl: '<script src="%s"></script>',
      appRoot: '',
      relative: true
    }))
    .pipe(linker({
      scripts: ['build/app.js'],
      startTag: '<!--SCRIPTS-->',
      endTag: '<!--SCRIPTS END-->',
      fileTmpl: '<script src="%s"></script>',
      appRoot: 'build',
      relative: true
    }))
    .pipe(gulp.dest(buildConfig.dev.buildDir));
});
