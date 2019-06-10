const mongoose = require("mongoose");
const { Schema } = mongoose;


const hallSchema = new Schema({
  cinema: {type: Schema.ObjectId, ref: "Cinema"},
  name: String, 
  seats: [{
    row: Number,
    countOfSeats: Number,
    cost: Number
  }]
},
{ 
  versionKey: false 
});

module.exports = mongoose.model("Hall", hallSchema);