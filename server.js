var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
var app = express();
var jsonParser = bodyParser.json();
 
const userScheme = new Schema({
  name: String,
  age: Number
});

mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });

const User = mongoose.model("User", userScheme);
const user = new User({
    name: "Bim",
    age: 50
});
  
user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных
      
    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});

// получение списка данных
// app.get("/api/cards", function(req, res){
      
//     var content = fs.readFileSync("cardDescription.json", "utf8");
//     var cards = JSON.parse(content);
//     res.send(cards);
// });
app.listen(8080, function(){
  console.log("Сервер ожидает подключения...");
});