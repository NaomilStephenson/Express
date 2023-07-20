'use strict'
const express = require('express');  
const server = express();

server.set("view engine","ejs");

// Landing page route to template 'home'
server.get("/",(request, response) => {
    response.render("home.ejs");
    response.end();
});

// Route to template 'Single Answers'
server.get("/single/:n",(request, response) => {
    response.render("single.ejs",{n:request.params.n});
    response.end();
});

// Second Route to template 'Second Number'
server.get("/second/:n",(request, response) => {
    response.render("second.ejs",{n:request.params.n});
    response.end();
});

// Second Route to template 'Second Answers'
server.get("/second/:n/:nn",(request, response) => {
    response.render("secondtables.ejs",{n:request.params.n,nn:request.params.nns});
    response.end();
});

server.listen((4000),() => {
    console.log(`Server is listening…`);
});