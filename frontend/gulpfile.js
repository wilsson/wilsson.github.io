var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    plugins = require('./gulpConfig/plugins');

var runTask = function(nameTask){
    var Task = require('./gulpConfig/tasks/' + nameTask);
    Task(gulp,path,plugins);
};

runTask('gulp_sass');
runTask('gulp_server');

gulp.task('default',['sass']);