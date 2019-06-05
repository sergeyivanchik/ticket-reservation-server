const mongoose = require("mongoose");
const { Schema } = mongoose;


const sessionSchema = new Schema({
  date: Number,
  cinema: {type:Schema.ObjectId, ref: "Cinema"},
  hall: String, 
  movie: {type:Schema.ObjectId, ref: "Film"},
  selectedSeats: [{
    row: Number,
    seat: Number,
    price: Number
  }]
},
{
  versionKey: false
});

module.exports = mongoose.model("Session", sessionSchema);
