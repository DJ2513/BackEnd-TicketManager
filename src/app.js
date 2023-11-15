const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

// Users
app.use('/user', require('./routes/user'));


app.get("/", (req, res) => {
    res.send("You are in the Main Page");
});

app.listen(port, console.log(`Listening on port ${port}`));