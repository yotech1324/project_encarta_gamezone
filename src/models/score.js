const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
    },
    score: {
        type:Array,
        required:true
    }

})


// creating a collection


const Score = new mongoose.model("scores", scoreSchema,"scores")

module.exports=Score;