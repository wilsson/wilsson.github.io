var express = require('express'),
    path    = require('./path'),
    gulp    = require('gulp'),
    config  = require('./config.local'),
    _path   = require('path');

var app = express();

app.set('views', path.base);
app.use(express.static(path.base + '/_site'));

var bs = require('browser-sync').create();

app.get('/',function(req,res){
  res.sendFile(_path.resolve(path.base + '/_site/index.html'));
});

var bs = require('browser-sync').create();
app.listen(config.port,function(){
  console.log('> ready - express <!');
});