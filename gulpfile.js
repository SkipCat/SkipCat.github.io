var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
  return gulp.src('./assets/js/script.js')
    .pipe(plumber(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    })))
    .pipe(uglify({
      output: {
        comments: '/^!/'
      }
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('styles', function () {
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/js/script.js', gulp.series('scripts'));
  gulp.watch('./assets/scss/main.scss', gulp.series('styles'));
});