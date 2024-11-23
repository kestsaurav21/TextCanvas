const express = require("express")
const mongoose = require("mongoose")


const app = express();


const port = 7700;

app.get("/", (req,res) => {
    res.send('Hello World!!!');
})

app.listen(port, () => {
    
    console.log(`Server listening on port ${port}`);
    
})