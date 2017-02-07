// adding a tast to require gulp
var gulp = require('gulp');
// adding the file packages
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
// adding a minify
var uglify = require('gulp-uglify');
// attaching a gulp util
var utilities = require('gulp-util');
// install del which is used to delete packages
var del = require('del');
// using jshint to lint
var jshint = require('gulp-jshint');
// using a gulp util to tell us which environment we are working on
var buildProduction = utilities.env.production;
// adding bower file require functuon to call boostrap
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
// implement our development server with live reloading
var browserSync = require('browser-sync').create();
// files to help use sass
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('concatInterface', function() {
  return gulp.src([ './js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

// a function to call browserify
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});
// a css require task
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});
// combining both the 2 bower task  since they can run parallel, JS and CSS
gulp.task('bower', ['bowerJS', 'bowerCSS']);

// adding a clean task to clean our work , we are telling it to delete build and temp folders
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
  gulp.start('cssBuild');
});
// this will start the live reload server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
});
// this is the task to reload the page after any changes
gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});
// this watcher will check for any changes
gulp.watch(['js/*.js'], ['jsBuild']);
 gulp.watch(['bower.json'], ['bowerBuild']);
 gulp.watch(['*.html'], ['htmlBuild']);

 gulp.task('htmlBuild', function() {
  browserSync.reload();
});
gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});
// task to call css over sass
gulp.task('cssBuild', function() {
  return gulp.src(['scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});
