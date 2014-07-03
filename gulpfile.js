
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

gulp.task('default', ['copy-react-bootstrap'], function () {
});
