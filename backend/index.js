import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express()
const portID = process.env.PORT || 9000


app.get("/api", (req,res) => {
    res.send(`Hello world on http://localhost:${portID}`);
});

app.get("/api/home", (req,res) => {
    res.send(`This is the home page`);
});


app.listen(portID, (req,res) => {
    console.log(`Backend running on ${portID}`);
});





