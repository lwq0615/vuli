/**
 * 打包packages目录下的样式文件
 */
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css')
const base64 = require('gulp-base64') 

gulp.task('css',async function(){
    gulp.src("packages/css/**/*.css")
    .pipe(base64())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    return gulp.src("packages/css/**/*.scss")
    .pipe(sass())
    .pipe(base64())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
})