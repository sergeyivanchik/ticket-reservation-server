const mongoose = require("mongoose");
const { Schema } = mongoose; 


const cinemaSchema = new Schema({
  name: String,
  city: String,
  additionalServices: [{
    name: String,
    cost: Number
  }]
}, 
{
  versionKey: false
});
   
module.exports = mongoose.model("Cinema", cinemaSchema);
