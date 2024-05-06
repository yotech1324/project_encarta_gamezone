const mongoose = require("mongoose")
const  dotenv = require('dotenv')
dotenv.config();
const connection_URL = process.env.connection_URL 
mongoose.connect(connection_URL,{
}).then(() =>{
    console.log(`successfully connected to database`);
}).catch((error) =>{
    console.log(connection_URL)
    console.log(`not connetced to database`);
}) 
