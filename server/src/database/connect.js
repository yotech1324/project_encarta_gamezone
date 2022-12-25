const mongoose = require("mongoose")
db=""
mongoose.connect("mongodb+srv://ysahu1324:Yug1324@cluster0.k2o1nr1.mongodb.net/GameZone?retryWrites=true&w=majority",{
    
}).then(() =>{
    console.log(`successfully connected to database`);
}).catch((error) =>{
    console.log(`not connetced to database`);
})