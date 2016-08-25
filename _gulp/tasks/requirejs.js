var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var concat = require('gulp-concat');

// configfile
var config = require('../config').requirejs;

gulp.task('requirejs', function () {
    return gulp.src(config.src)
        .pipe(requirejsOptimize({
            baseUrl: 'js/lib',
            paths: {
              main: '../app/main',
              modal: '../app/modal',
              toggle: '../app/toggle',
              tabs: '../app/tabs',
              jquery: 'jquery-3.1.0'
            }
        }))
        .pipe(concat(config.concatFilename))
        .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));
});
