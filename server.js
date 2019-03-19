var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
 
var app = express();
var jsonParser = bodyParser.json();
 
// получение списка данных
app.get("/api/cards", function(req, res){
      
    var content = fs.readFileSync("cardDescription.json", "utf8");
    var cards = JSON.parse(content);
    res.send(cards);
});
app.listen(8080, function(){
  console.log("Сервер ожидает подключения...");
});