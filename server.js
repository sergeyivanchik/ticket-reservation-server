const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jsonParser = express.json();
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json'); 

mongoose.plugin(toJson);
app.use(cors())
app.use(jsonParser);
app.use('/',require('./routes/index'));
mongoose.connect("mongodb://localhost:27017/cinema", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(8080, function(){
        console.log("Сервер ожидает подключения...");
    });
});
 
var app = express();
var jsonParser = bodyParser.json();
 
// получение списка данных
app.get("/api/users", function(req, res){
      
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    res.send(users);
});
app.listen(8080, function(){
  console.log("Сервер ожидает подключения...");
});