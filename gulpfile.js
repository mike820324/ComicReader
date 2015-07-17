var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/'));
});
