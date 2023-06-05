const express = require("express");
const path = require("path")

const port = 4000;

const app = express();

app.use(express.urlencoded());
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

const users = ["Haris", "Mudassir", "Shah Hussain"];

app.use("/", function (req, res, next) {
    console.log("Request received to server")
    next()
})

app.get("/", function (req, res, next) {
    console.log(path.join(__dirname, "views/home"))
    res.status(200).sendFile(path.join(__dirname, "views/home.html"));
})

app.post("/users", function (req, res) {
    console.log("req.body", req.body)
    const {name} = req.body;
    users.push(name);
    res.status(201).send({ users })
});


app.get("/users", function (req, res, next) {
    res.json({ users })
})

app.get("/users/:userId", function (req, res) {
    console.log(req.params)
    const {userId} = req.params;
    const user = users[userId];
    if(!user) {
        return res.status(404).send("User not found");
    }
    res.status(200).send({
        user
    })
})

app.listen(port, function () {
    console.log(`Server is listening on port: ${port}`)
})