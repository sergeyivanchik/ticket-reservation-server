const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jsonParser = express.json();
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json'); 

mongoose.plugin(toJson);
require('./api/models/film.js');
require('./api/models/cinema.js');
require('./api/models/session.js');
app.use(cors())
app.use(jsonParser);
app.use('/',require('./api/routes/index'));
mongoose.connect("mongodb://localhost:27017/cinema", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(8080, function(){
        console.log("Сервер ожидает подключения...");
    });
});
 