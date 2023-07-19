const express = require('express');                             // Load dependency

const app = express();                                          // Instanciate as function

const server = app.listen((4000),() => {                         // Start server, Define port as 4000 and send confirmation to console
    console.log(`Server is listening…`);
});

app.get("/",(request, response) => {
    response.write("Hello");                                    // Can 'write' as many lines as require...
    response.write("World");
    response.write("...");
    response.end();                                             // Only when you put 'end' will this send the response
});

app.get("/home",(request, response) => {                        // Single Path Function
    response.send("Hello");
});

app.get(["/home","/welcome"],(request, response) => {           // Multiple Path function
    response.send("Hello");
});