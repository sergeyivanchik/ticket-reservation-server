const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const seanseScheme = new Schema({date: Number, cinema:{type:Schema.ObjectId, ref: "Cinema"}, hall : String, film:{type:Schema.ObjectId, ref: "Film"}, selectedSeats:{type:Array}}, {versionKey: false});

module.exports = mongoose.model("Seanse", seanseScheme);