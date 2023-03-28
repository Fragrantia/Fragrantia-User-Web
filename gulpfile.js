// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

gulp.task('sass', function(cb) {
  gulp
    .src('./scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(
      gulp.dest('./css')
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    cb();
  })
);