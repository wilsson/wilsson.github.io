/**
 *
 *  gulpfile.js 
 *
 */

var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    plugins = require('./gulpConfig/plugins'),
    config  = require('./gulpConfig/config.local');

var runTask = function(nameTask){
    var Task = require('./gulpConfig/tasks/' + nameTask);
    Task(gulp,path,plugins,config);
};

runTask('gulp_sass');
runTask('gulp_jekyll');
runTask('gulp_express');
runTask('gulp_browsersync');
runTask('gulp_watch');

gulp.task('server',['jekyll-build','express','browserSync','watch']);
gulp.task('default',['sass']);