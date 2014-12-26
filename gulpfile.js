'use strict';
var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    plumber   = require('gulp-plumber'),
    uglify    = require('gulp-uglify'),
    webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  return gulp.src('app')
  .pipe(webserver({
    livereload: true,
    directoryListing: false,
    open: true
  }));
});

gulp.task('sass', function () {
  gulp.src('dev/sass/*.scss')
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function(){
  return gulp.src('dev/js/*.js')
  // .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function(){
  gulp.watch('dev/js/*.js', ['scripts']);
  gulp.watch('dev/sass/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'scripts', 'watch']);
gulp.task('serve', ['sass','scripts','watch','webserver']);
