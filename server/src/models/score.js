const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    score: {
        type: Array,
        required: true
    }
})

const Score = new mongoose.model("scores", scoreSchema, "scores")

module.exports = Score;