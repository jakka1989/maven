var gulp = require('gulp');
var tslintHtmlReport = require('tslint-html-report');

gulp.task('buildReport', done => {
      tslintHtmlReport({
      tslint: '/tslint.json',
      srcFiles: 'Desktop/Typescript/*',  //Set the path of your source directories
      outDir: 'Desktop/Typescript/tslint-report', //Set the path for the output report to be generated
      html: 'tslint-report.html',
      breakOnError: false,
      typeCheck: true,
      tsconfig: 'Desktop/Typescript/tsconfig.json'
    });
	done();
});

