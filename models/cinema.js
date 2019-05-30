const mongoose = require("mongoose");
const { Schema } = mongoose; // деструктуризация проще и выглядит солиднее

// удобочитаемость наше всё :0
const cinemaSchema = new Schema({
    name: String, 
    halls:[{
        type:Object
    }]
}, {
    versionKey: false
});
   
module.exports = mongoose.model("Cinema", cinemaSchema);