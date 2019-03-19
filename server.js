var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
 
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