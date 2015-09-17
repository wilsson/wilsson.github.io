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
  var jekyll = process.platform  === 'win32' ? 'jekyll.bat' : 'jekyll';
  
  /* express */
  var express = require('express');
  var app = express();
  app.set('views', path.base);
  app.use(express.static(path.base + '/_site'));

  gulp.task('express',function(){
    app.get('/',function(req,res){
      res.sendFile(_path.resolve(path.base + '/_site/index.html'));
    });

    app.listen(config.port,function(){
      console.log('> ready - express <!');
    });
  });

  /* jekyll-build */
  gulp.task('jekyll-build',function(cb){
    return plugins.cp.spawn(jekyll, ['build'], {stdio: 'inherit',cwd: path.base})
      .on('close', cb);
  });

  /* browserSync */
  gulp.task('browserSync',function(){
    plugins.browserSync.init({
      proxy: "http://localhost:" + config.port + "/"
    });
  });

  /* watch */
  gulp.task('watch',function(){
    gulp.watch([path.base + '/_sass/*.scss'],['sass',plugins.browserSync.reload]);
    gulp.watch([path.base +'/index.html', path.base+'/_layouts/*.html', path.base+'/_posts/*',path.base+'/_config.yml'], ['jekyll-build',plugins.browserSync.reload]);  
  });

  gulp.task('server',['jekyll-build','express','browserSync','watch']);
};

module.exports = Task;