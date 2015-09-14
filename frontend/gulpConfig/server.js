var express = require('express'),
    path    = require('./path'),
    gulp    = require('gulp'),
    config  = require('./config.local')
    _path   = require('path');

var app = express();

app.set('views', path.base);

var browserSync = require('browser-sync');
var bs = browserSync.create();



app.get('/',function(req,res){
  res.sendFile(_path.resolve(__dirname+"/../../_site/index.html"));
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