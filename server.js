const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jsonParser = express.json();

app.use(jsonParser);
app.use('/films',require('./routes/film'));
mongoose.connect("mongodb://localhost:27017/cinema", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(8080, function(){
        console.log("Сервер ожидает подключения...");
    });
});
 
