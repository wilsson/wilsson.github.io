/**
 *
 * @module Task (gulp server)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins, config){
  gulp.task('jekyll-build', function (done) {
    //browserSync.notify(messages.jekyllBuild);
    return plugins.cp.spawn('jekyll', ['build'], {stdio: 'inherit',cwd: path.base})
        .on('close', done);
  });

  gulp.task('server',['jekyll-build'],function(){
    var called = false ;
    return plugins.nodemon({
      script: 'gulpConfig/server.js'
    })
    .on('start',function(){
      console.log('iniciando!');
    })
    .on('restart',function(){
      console.log('necesito un restart?');
    })
    .on('crash',function(){
      console.log('se crasheo');
    });
  });  
};

module.exports = Task;