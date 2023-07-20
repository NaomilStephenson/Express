'use strict'
const express = require('express');  
const server = express();

server.set("view engine","ejs");

server.get("/",(request, response) => {
    response.render("home.ejs");
    response.end();
});

server.get("/single/:num",(request, response) => {
    response.render("single.ejs",{n:request.params.num});
    response.end();
});

server.get("/second/:num",(request, response) => {
    response.render("second.ejs",{n:request.params.num});
    response.end();
});

server.get("/second/:num/:secnum",(request, response) => {
    response.render("secondtables.ejs",{n:request.params.num,sn:request.params.secnum});
    response.end();
});

server.listen((4000),() => {
    console.log(`Server is listening…`);
});