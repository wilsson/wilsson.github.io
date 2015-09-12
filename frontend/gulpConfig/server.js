var express = require('express'),
    path    = require('./path'),
    gulp    = require('gulp'),
    config  = require('./config.local');

var app = express();

app.set('views', path.base);

var browserSync = require('browser-sync');
var bs = browserSync.create();



app.get('/',function(req,res){
  //console.log(path.base + '/sitio' + '/index.html','<<<<');
  res.sendFile("/home/wilson/proyectos/wilsson.github.io/_site/index.html");
});



app.listen(config.port,function(){
  console.log('ready!');
  fnBrowserSync();
});

var fnBrowserSync = function(){
  bs.init({
    proxy: "http://localhost:" + config.port + "/"
  });
};