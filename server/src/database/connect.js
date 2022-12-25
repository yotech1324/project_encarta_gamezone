const mongoose = require("mongoose")
db=""
mongoose.connect("mongodb://localhost:27017/GameZone",{
    
}).then(() =>{
    console.log(`successfully connected to database`);
}).catch((error) =>{
    console.log(`not connetced to database`);
})