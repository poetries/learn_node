var http = require("http");
var express = require("express");
var app = express();

// 设置模板引擎
app.set('views', __dirname + '/views');

app.set('view engine','ejs');

app.use("/",require("./router/index"));

app.use(express.static(__dirname + '/public'))

http.createServer(app).listen(233);
