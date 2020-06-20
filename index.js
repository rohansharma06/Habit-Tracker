const express = require('express');
const port = 8000;
const app = express();

//---- to parse url
app.use(express.urlencoded());

//---- accessing satic folder 
app.use(express.static('assets'));

//---- use ejs template
app.set('view engine', 'ejs');
app.set('views', './views');

//---- database
const db = require('./config/mongoose');


//--- routing
app.use('/',require('./routes'));


//---- starting up server
app.listen(port, function(err){
    if(err){
        console.log("Error found",err);
        return;
    }
    console.log("Server is up and running at post",port);
});