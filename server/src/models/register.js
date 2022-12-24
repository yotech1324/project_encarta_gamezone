const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({


    fullname:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true,
   unique:true
   
    },
     email:{

        type:String,
        required:true,
        unique:true
     },

     gender:{
        type:String,
         required:true,
     }
})


// creating collection

const Register =  new mongoose.model("register",playerSchema,"register")


module.exports() = Register;