const express = require('express');
const port = 8000;
const app = express();

//---- accessing satic folder 
app.use(express.static('assets'));

//---- use ejs template
app.set('view engine', 'ejs');
app.set('views', './views');

//--- routing
app.use('/',require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log("Error found",err);
        return;
    }
    console.log("Server is up and running at post",port);
});