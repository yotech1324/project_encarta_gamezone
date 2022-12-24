const express = require("express")
const app = express()

const port = process.env.port || 3000

app.use(express.json())

require("./database/connect");


const Register = require("./models/register");

const Score = require("./models/score");


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
try{
    if(username.username ==  username){
        res.status(201).render("");
    }else{
        res.send("invalid username")
    }
} catch(error){
    res.status(400).send("invalid username")
}

})

// user score save 


app.post("/score", async(req, res) =>{

    try{
        const addscore = new Score({
            username: req.body.username,
            score: req.body.score,
        })
const added = await addscore.save();
res.status(201).send(added);
    } catch(error){
        res.status(400).send(error)
    }
    

})



// get player data 


app.get("/playerdata/:username", async(req ,res) =>{
    const username = req.params.username;

    const playerdata = await Register.find({username:username});
    res.json(playerdata);
})


// getting scores 

app.get("/playerscores/:username", async(req, res) =>{

    const username = req.params.username;
    const playerscores = await Score.find({username:username});
    res.json(playerscores);
})



// listening port

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
})
