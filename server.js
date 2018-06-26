var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongoose = require("mongoose"); 
var config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.createConnection(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

var app = express()  
app.use(bodyParser.json());  
//app.use(bodyParser.json({limit:'5mb'}));   
//app.use(bodyParser.urlencoded({extended:true}));  


app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
});
