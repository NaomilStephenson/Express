// Using Middleware

app.use((request, response, next) => {
    // Function
    next();                                                 // We do not define this - this is managed by the Express Module
});

// ! Every middleware function should either terminate with res.send() or call next(), otherwise the request will hang !

const logger = (request, response, next) => {               // Create a Middleware function
    console.log(new Date());
    next();
};
app.use(logger);                                            // Instanciate the Function (making it useable by the app)

app.get('/', logger, (request, response) => {               // Nesting Middleware inside other functions
    response.send('Hello, world!');
});



