var gulp=require('gulp');
var sass=require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss').pipe(sass({outputStyle:"expanded"})).pipe(gulp.dest('./build/css/'));
});
gulp.task('watch',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
});
gulp.task('build',function(){
	gulp.src('./build/css/style.css').pipe(cleanCss()).pipe(rename('style.min.css')).pipe(gulp.dest('./build/css/'));
})
gulp.task('imagemin', function () {
    return gulp.src('./src/img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./build/img/'));
});

gulp.task('default',['sass','watch']);
gulp.task('compress',['sass','build','imagemin']);