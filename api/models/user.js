const mongoose = require("mongoose");
const { Schema }= mongoose;


const usersSchema = new Schema({
  name: String, 
  login: {
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

module.exports = mongoose.model("User", usersSchema);
