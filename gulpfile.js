var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/scss/main.scss', gulp.series('styles'));
});