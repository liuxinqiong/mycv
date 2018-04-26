/**
 * Created by Ethan on 2017/11/22.
 */
var express = require('express');
var path = require('path');

var app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8888, function () {
    console.log('mycv listening on port 8888');
});