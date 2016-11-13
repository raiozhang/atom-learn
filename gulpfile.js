var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    reload = borwserSync.reload,
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    borwserSync.init({
        server: {
            baseDIr: './'
        }
    });

    gulp.watch('./scss/*.scss', ['sassfile']);
    gulp.watch('./js/*.js',['jsfile']);
    gulp.watch('*.html').on('change', reload);
})

gulp.task('sassfile', function() {
    return gulp.src('./scss/*.scss').pipe(sass()).pipe(gulp.dest('./css')).pipe(reload({stream:true}));
})

gulp.task('jsfile',reload);
