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
  gulp.task('jekyll-build', function (done) {
    var jekyll = process.platform  === 'win32' ? 'jekyll.bat' : 'jekyll';
    return plugins.cp.spawn(jekyll, ['build'], {stdio: 'inherit',cwd: path.base})
        .on('close', done);
  });

  gulp.task('server',['jekyll-build'],function(){
    return plugins.nodemon({
      script: 'gulpConfig/server.js',
    })
    .on('start',function(){
      console.log('server express ready - continued functions browserSync and watch');      
      plugins.browserSync.init({
        proxy: "http://localhost:" + 4000 + "/"
      });
      gulp.watch([path.base + '/_sass/*.scss'],['sass',plugins.browserSync.reload]);
      gulp.watch([path.base +'/index.html', path.base+'/_layouts/*.html', path.base+'/_posts/*',path.base+'/_config.yml'], ['jekyll-build',plugins.browserSync.reload]);  
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