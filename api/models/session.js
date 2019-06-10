const mongoose = require("mongoose");
const { Schema } = mongoose;


const sessionSchema = new Schema({
  date: Number,
  cinema: {type: Schema.ObjectId, ref: "Cinema"},
  hall: {type: Schema.ObjectId, ref: "Hall"}, 
  movie: {type: Schema.ObjectId, ref: "Film"},
},
{
  versionKey: false
});

module.exports = mongoose.model("Session", sessionSchema);
