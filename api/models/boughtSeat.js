const mongoose = require("mongoose");
const { Schema } = mongoose;


const boughtSeatsSchema = new Schema({
  user: {type: Schema.ObjectId, ref: "User"},
  session: {type: Schema.ObjectId, ref: "Session"},
  cinema: {type: Schema.ObjectId, ref: "Cinema"},
  hall: {type: Schema.ObjectId, ref: "Hall"},
  movie: {type: Schema.ObjectId, ref: "Movie"},
  additionalServices: {
    type: Array,
    default: []
  },
  row: Number,
  seat: Number,
  cost: Number
},
{ 
  versionKey: false 
});

module.exports = mongoose.model("BoughtSeat", boughtSeatsSchema);
