var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');

var js_path = './js/**/*.js';
var css_path = './css/**/*.scss';

gulp.task('js', [], function() {
  browserify('./js/TopAlbumsList.js')
    .transform(reactify)
    .bundle()
    .pipe(source('./app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
  gulp.src('./css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function() {
  gulp.src('./images/**/*.*')
    .pipe(gulp.dest('./dist/images'));
  gulp.src('./fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(css_path, ['sass']);
  gulp.watch(js_path, ['js']);
});

gulp.task('default', ['watch', 'js', 'sass', 'copy']);
