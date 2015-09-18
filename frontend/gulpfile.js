/**
 *
 *  gulpfile.js 
 *
 */

var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    plugins = require('./gulpConfig/plugins'),
    config  = require('./gulpConfig/config.local'), 
    fs      = require('fs');

var tasks = fs.readdirSync('./gulpConfig/tasks');
var task;

for(var i=0;i<tasks.length;i++){
    task = require('./gulpConfig/tasks/' + tasks[i]);
    task(gulp,path,plugins,config);
}

gulp.task('server',['jekyll-build','express','browserSync','watch']);
gulp.task('default',['sass']);