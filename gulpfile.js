var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {

    return gulp.src("./resources/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function() {


    browserSync.init({
        server: "./",
        port: 8181
    });
    gulp.watch("./resources/scss/*.scss", gulp.series('sass'));
    gulp.watch("./resources/views/*.php").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
