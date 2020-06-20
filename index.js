const express = require('express');
const port = 8000;
const app = express();


app.use(express.urlencoded());

//---- accessing satic folder 
app.use(express.static('assets'));

app.set('home extractStyle',true);
app.set('habitDetails extractStyle',true);

//---- use ejs template
app.set('view engine', 'ejs');
app.set('views', './views');



//---- database
const db = require('./config/mongoose');


//--- routing
app.use('/',require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log("Error found",err);
        return;
    }
    console.log("Server is up and running at post",port);
});