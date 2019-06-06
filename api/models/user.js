const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength:3,
    maxlength:20
  }, 
  password: {
    type: String,
    required: true,
    minlength:5,
    maxlength:20
  }, 
  email: String,
},
{
  versionKey: false
});

module.exports = mongoose.model("User", userSchema);
