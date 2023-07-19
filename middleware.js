// Using Middleware

app.use((request, response, next) => {
    // Function
    next();     // We do not define this - this is managed by the Express Module
})

// Every middleware function should either terminate with res.send() or call next(), otherwise the request will hang.

// Creating Middleware

const logger = (request, response, next) => {
    console.log(new Date());
    next();
}

app.use(logger);

// Nesting Middleware

app.get('/', logger, (request, response) => {
    response.send('Hello, world!');
});



