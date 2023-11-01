const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Hello World");
});

route.get("/login", (req, res) => {
    res.send("You are on the login page");
});
module.exports = route;