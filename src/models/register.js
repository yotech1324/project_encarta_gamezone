const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required:false
    },

    username: {
        type:String,
        required:false,
        unique:true
    },
    email: {
        type:String,
        required:false,
        unique:true
    },
    gender: {
        type:String,
        required:false,
    },

})


// creating a collection


const Register = new mongoose.model("register", playerSchema,"register")

module.exports=Register;