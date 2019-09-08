var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {

    return gulp.src("./sass/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function() {


    browserSync.init({
        server: "./",
        port: 8181
    });
    gulp.watch("./sass/*.scss", gulp.series('sass'));
    gulp.watch("./index.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
