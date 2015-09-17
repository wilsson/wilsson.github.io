var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    plugins = require('./gulpConfig/plugins'),
    config  = require('./gulpConfig/config.local');

var runTask = function(nameTask){
    var Task = require('./gulpConfig/tasks/' + nameTask);
    Task(gulp,path,plugins,config);
};

runTask('gulp_sass');
runTask('gulp_server');

gulp.task('default',['sass']);