var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// router
// var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');

// 建立 DB 連線
require('./connection');

var app = express();  // express 實例化

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/posts', postsRouter);

module.exports = app;