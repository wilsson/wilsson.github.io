var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    config  = require('./gulpConfig/config.local');
    plugins = require('./gulpConfig/plugins');

var runTask = function(nameTask){
    var Task = require('./gulpConfig/tasks/' + nameTask);
    Task(gulp,path,plugins,config);
};

runTask('gulp_sass');
runTask('gulp_server');

gulp.task('default',['sass']);