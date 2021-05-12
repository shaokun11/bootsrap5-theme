const gulp = require("gulp");
var sass = require("gulp-sass");
sass.compiler = require("node-sass");
const autoprefixer = require("gulp-autoprefixer");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
exports.default = function () {
  return gulp
    .src("index.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
    ;
};
