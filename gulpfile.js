var gulp = require('gulp');
var csslint = require('gulp-csslint');
var jslint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task("csslint", function () {
  return gulp.src("src/css/*.css")
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task("jslint", function () {
  return gulp.src("src/js/*.js")
    .pipe(jslint())
    .pipe(jslint.reporter("default"));
});

gulp.task('compress-css', function () {
  gulp.src('src/css/*.css')
    .pipe(minifyCSS({
      keepBreaks: true
    }))
    .pipe(gulp.dest('build/css'))
});

gulp.task("compress-js", function () {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
})

gulp.task('default', ['jslint', 'csslint'])
gulp.task('build', ['jslint', 'csslint', 'compress-js', 'compress-css'])