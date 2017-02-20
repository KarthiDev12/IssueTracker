var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var user = require('./routes/user');

var app = express();

var port = 3000;

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'client')));
app.use('/bower_components', express.static(path.dirname(__dirname) + '/bower_components'));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/api', user);


app.listen(port,function(){
    console.log("Server started on this"+port);
});