const err = new Error('This is an Error Messsage!');

const errorLogger = (err, request, response, next) => {     // Function - Logs error to console
    console.log(err.stack);
    next(err);
};
app.use(errorLogger);                                       // Makes function usable

const sendError = (err, request, response) => {             // Function - Sends Error Message back to requester
    response.status(500).send(err.message);
};
app.use(sendError);                                         // Makes function usable

app.get('/error', (request, response, next) -> {            // Handles an error route
    next(err);
});
