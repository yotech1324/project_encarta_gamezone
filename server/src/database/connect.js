const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/GameZone",{

}).then(() =>{
    console.log("successfully connected to database")
}).catch(() =>{
    console.log("not connected to databaase")
})
