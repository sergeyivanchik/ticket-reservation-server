const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    name : {
        type: String,
    }, 
    login : {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    }, 
    password : {
        type: String,
        required: true,
        minlength:5,
        maxlength:20
    }, 
    email : {
        type : String,
    }
}, {versionKey: false});

module.exports = mongoose.model("User", usersSchema);