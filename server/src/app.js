const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");
const hbs = require("hbs");

// new code 

 const static_path = path.join(__dirname,"../public");

 app.use(express.static(static_path));

 app.get("/",(req,res)=>{
    res.render("index.hbs")
 })

 
 app.get("/gameMenu.hbs",(req,res)=>{
    res.render("../views/pages/gameMenu.hbs")
 })

 app.get("/register.hbs",(req,res)=>{
    res.render("../views/pages/register.hbs")
 })

 
 app.get("/pages/game-mode.html",(req,res)=>{
    res.render("../views/pages/game-mode.hbs")
 })

 
 app.get("/pages/game.html",(req,res)=>{
    res.render("../views/pages/game.hbs")
 })

// last time committed code



app.use(express.json());




require("./database/connect");

const Register = require("./models/register");

const Score = require("./models/score");
const { response } = require("express");
const { Http2ServerRequest } = require("http2");

// create or register  a new player

app.post("/register", async (req, res) => {
    try {

        const username = req.body.username;
        // const username = localStorage.getItem("username");
        const Username = await Register.findOne({ username: username });
        if (Username.username == username) {
            res.status(201).render("/server/views/pages/gameMenu.hbs");

        } else {
            
        

        const registerplayer = new Register({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            gender: req.body.gender
        })
        const registered = await registerplayer.save();

        res.status(201).render("server\views\pages\gameMenu.hbs")
    }
    } catch (error) {
        res.status(400).send(error)
    }
}
)

// checking login details 


app.post("/login", async (req, res) => {

    try {
        const username = req.body.username;
        // const username = localStorage.getItem("username");
        const Username = await Register.findOne({ username: username });
        if (Username.username == username) {
            res.status(201).render("../views/index.hbs");

        } else {
            res.render("/views/pages/gameMenu.hbs")
        }

    } catch (error) {
        res.status(400).send("invalid username")
    }


})


// user score save apis


app.post("/score", async (req, res) => {

    try {
        const addscore = new Score({
            username: req.body.username,
            score: req.body.score,
        })
        use
        const added = await addscore.save();
        res.status(201).send(added);

    } catch (error) {
        res.status(400).send(error)
    }

})


// getting player data
app.get("/playerdata/:username", async (req, res) => {
    const username = req.params.username;
    const playerdata = await Register.find({ username: username });

    res.json(playerdata);
})



// getting scores

app.get("/playerscores/:username", async (req, res) => {
    const username = req.params.username;
    const playerscores = await Score.find({ username: username });
    res.json(playerscores);
})








app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
}
)

