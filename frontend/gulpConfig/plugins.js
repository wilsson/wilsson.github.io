var Plugins = {
    nodemon     : require('gulp-nodemon'),
    sass        : require('gulp-sass'),
    browserSync : require('browser-sync').create(),
    cp          : require('child_process'),
    runSequence : require('run-sequence')
}; 

module.exports = Plugins