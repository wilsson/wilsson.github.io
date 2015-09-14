/**
 *
 * @module Task (gulp server)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins){
  var jekyll = process.platform  === 'win32' ? 'jekyll.bat' : 'jekyll';
  gulp.task('jekyll-build', function (done) {
    return plugins.cp.spawn(jekyll, ['build'], {stdio: 'inherit',cwd: path.base})
        .on('close', done);
  });

  gulp.task('server',['jekyll-build'],function(){
    return plugins.nodemon({
      script: 'gulpConfig/server.js'
    })
    .on('start',function(){
      console.log('start');
    })
    .on('restart',function(){
      console.log('restart');
    })
    .on('crash',function(){
      console.log('error');
    });
  });  
};

module.exports = Task;