var Plugins = {
    sass        : require('gulp-sass'),
    browserSync : require('browser-sync').create(),
    cp          : require('child_process'),
    path        : require('path'),
    runSequence : require('run-sequence')
}; 

module.exports = Plugins