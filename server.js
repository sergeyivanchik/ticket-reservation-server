var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
var app = express();
var jsonParser = bodyParser.json();
 
// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
  
// установка схемы
const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
});
const User = mongoose.model("User", userScheme);

User.updateOne({name: "Tom"}, {name: "Tom Smith"}, function(err, result){
     
  mongoose.disconnect();
  if(err) return console.log(err);
  console.log(result);
});


app.listen(8080, function(){
  console.log("Сервер ожидает подключения...");
});