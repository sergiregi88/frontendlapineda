
    var gulp=require("gulp");
var sass=require("gulp-sass");


gulp.task('default', function() {








}) ;

 gulp.task('fsass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
