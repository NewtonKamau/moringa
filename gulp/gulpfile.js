var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilites = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production
var lib = require('bower-files') {
    'overides': {
        'bootstrap': {
            'main': [
                'less/bootstrap.less'
                'dist/css/bootsrap.css'
                'dist/js/bootsrap.js'
            ]
        }
    }
};
var browserSync = require('browsersync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('jsHint', function() {
    return (['./js/*.js'])
        .pipe(jshint(''))
        .pipe(gulp.reporter('default'))
})

gulp.task('concatInterface', function() {
    return gulp.src(['./js/*-interface.js'])
        .pipe(concat('allConcat.js'))
        .pipe(gulp.dest('./tmp'))
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
    return browserify({
            entries: ['./tmp/*.js']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('minifyJS', ['jsBrowserify'], function() {
    return gulp.src('.build/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('bowerCSS', function() {
    return gulp.src(lib.ext('css').files)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('./build/css'))
});

gulp.task('bowerJS', function() {
    return gulp.src(lib.ext('js').files)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./bulid/js'))
});

gulp.task('bower' ['bowerJS', 'bowerCSS'])

gulp.task('clean', function() {
    return del(['./tmp', './bulid'])
});

gulp.task('build', ['clean'], function() {
    if (buildProduction) {
        gulp.start('minifyJS');
    } else {
        gulp.start('jsBrowserify');
    }
    gulp.start('bower');
    gulp.start('cssBuild');
});

gulp.task('serve', ['build'], function() {
    browserSync.init({
        serve: {
            baseDir: './'
            index: 'index.html'
        }
    })
    gulp.watch(['./js/*.js'], ['jsBuild'])
    gulp.watch(['./bower.json'], ['bowerBuild'])
    gulp.watch(['./*.html'], ['htmlBuild'])
    gulp.watch(['.scss/*.scss'], ['cssBuild'])
});

gulp.task('jsBuild', ['jsHint', 'jsBrowserify']function() {
    browserSync.reload()
});

gulp.task('bowerBuild', ['Bower']function() {
    browserSync.reload()
});

gulp.task('htmlBuild', function() {
    browserSync.reload()
});

gulp.task('cssBuild', ['', '']function() {
    browserSync.reload()
});

gulp.task('cssBuild', function() {
    return gulp.src(['./scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
});
