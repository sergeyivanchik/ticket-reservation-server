const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cinemaSchema = new Schema({name: String, halls:[
    {
        type:Object
    }]}, {versionKey: false});
   
module.exports = mongoose.model("Cinema", cinemaSchema);