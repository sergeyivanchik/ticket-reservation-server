const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sessionSchema = new Schema({date: Number, cinema:{type:Schema.ObjectId, ref: "Cinema"}, hall : String, movie:{type:Schema.ObjectId, ref: "Film"}, selectedSeats:[{type:Object}]}, {versionKey: false});

module.exports = mongoose.model("Session", sessionSchema);