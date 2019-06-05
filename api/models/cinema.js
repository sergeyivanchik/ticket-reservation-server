const mongoose = require("mongoose");
const { Schema } = mongoose; 


const cinemaSchema = new Schema({
  name: String, 
  halls: [{
    name: String,
    places: [{
      row: Number,
      countOfSeats: Number,
      cost: Number
    }]
  }]
}, 
{
  versionKey: false
});
   
module.exports = mongoose.model("Cinema", cinemaSchema);
