

//loading the things we need

var express = require('express');
var app = module.exports = express();

//making the website dynamic
app.use('/static',express.static('static'));

//setting ejs as template engine
app.set('view engine','html');

//rendering the html files
app.engine('html',require('ejs').renderFile);

//for authentication purpose
var securityManager = module.exports.securityManager = require('./boot');


// directing the routes
require('./routes');


//creating the listener
var port=process.env.PORT || 8000;
app.listen(port,function(){
    console.log("Listening on 'http://127.0.0.1:"+port);
});
