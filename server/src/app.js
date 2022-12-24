const express = require("express")
const app = express()

const port = process.env.port || 3000

app.use(express.json())

require("./database/connect");


const Register = require("./models/register");

const score = require("./models./score");


// create or register a new player


app.post("/register", async (req, res) => {

    try {
        const registerplayer = new Register({

            fullname: req.body.fullname,
            username: req.body.userame,
            email: req.body.email,
            gender: req.body.gender
        })

const registered = await registerplayer.save();
res.status(201).render("")


    } catch(error) {
        res.status(400).send(error)
    }

})




// checking login details


app.post("/login", async(req, res) =>{
    const username = req.body.username;
    const Username =  await Register.findOne({username:username});

    if(username.username ==  username){
        res.status(201).render("")
    }


})






// listening port

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
})
