
var gulp = require('gulp');
var fs = require('fs');

gulp.task('copy-react-bootstrap', function () {
	if(fs.existsSync(__dirname + '/node_modules/react-bootstrap')) {
		gulp.src([__dirname + '/node_modules/react-bootstrap/*.js',
				 __dirname + '/node_modules/react-bootstrap/**/*.js'
		])
		.pipe(gulp.dest('react-bootstrap'));
	}
});

gulp.task('copy-bootstrap-css', function () {
	if(fs.existsSync(__dirname + '/node_modules/bootstrap')){
		gulp.src([__dirname + '/node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
		__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'])
			.pipe(gulp.dest('bootstrap/css'));
	}
});
gulp.task('copy-bootstrap-fonts', function () {
	if(fs.existsSync(__dirname + '/node_modules/bootstrap')){
		gulp.src(__dirname + '/node_modules/bootstrap/dist/fonts/*')
			.pipe(gulp.dest('bootstrap/fonts'));
	}
});



gulp.task('default', ['copy-react-bootstrap', 'copy-bootstrap-css', 'copy-bootstrap-fonts'], function () {
});
