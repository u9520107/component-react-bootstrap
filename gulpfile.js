
var gulp = require('gulp');
var fs = require('fs');
var less = require('gulp-less');

gulp.task('copy-react-bootstrap', function () {
	if(fs.existsSync(__dirname + '/node_modules/react-bootstrap')) {
		gulp.src([__dirname + '/node_modules/react-bootstrap/*.js',
				 __dirname + '/node_modules/react-bootstrap/**/*.js'
		])
		.pipe(gulp.dest('react-bootstrap'));
	}
});

gulp.task('compile-bootstrap', function () {
  gulp.src('bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('bootstrap/css'));

});

//gulp.task('copy-bootstrap-css', function () {
//	if(fs.existsSync(__dirname + '/node_modules/bootstrap')){
//		gulp.src([__dirname + '/node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
//		__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'])
//			.pipe(gulp.dest('bootstrap/css'));
//	}
//});
gulp.task('copy-bootstrap-fonts', function () {
	if(fs.existsSync(__dirname + '/node_modules/bootstrap')){
		gulp.src(__dirname + '/node_modules/bootstrap/dist/fonts/*')
			.pipe(gulp.dest('bootstrap/fonts'));
	}
});



gulp.task('default', ['copy-react-bootstrap', 'compile-bootstrap', 'copy-bootstrap-fonts'], function () {
});
