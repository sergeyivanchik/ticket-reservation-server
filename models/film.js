const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const filmSchema = new Schema({name: String, description: String, poster:String}, {versionKey: false});

module.exports = mongoose.model("Film", filmSchema);