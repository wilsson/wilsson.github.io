/**
 *
 * @module Task (gulp js)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins, Config){
  
  gulp.task('js',function(){
    return gulp.src(path.base + '/js/*.js')
    .pipe(gulp.dest(path.base + '/_site/js'));
  });  
};

module.exports = Task;