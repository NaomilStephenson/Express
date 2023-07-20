'use strict'
const express = require('express');  
const server = express();

server.set("view engine","ejs");

server.get("/",(request, response) => {
    response.render("home.ejs");
    response.end();
});

server.get("/timestable/:num",(request, response) => {
    response.render("tables.ejs",{tn:request.params.num});
    response.end();
});

server.listen((4000),() => {
    console.log(`Server is listening…`);
});