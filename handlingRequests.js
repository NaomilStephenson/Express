app.get('/read', (request, response)=>console.log('fetch'));            // Get  = read

app.post('/create', (request, response)=>console.log('create'));        // Post = create new

app.put('/replace', (request, response)=>console.log('replace'));       // Put = for full updates

app.patch('/update', (request, response)=>console.log('update'));       // Patch = for partial updates

app.delete('/delete', (request, response)=>console.log('delete'));      // Delete

app.delete('/home', (request, response)=>{                              // '/home' = Path / Route
    console.log(request.params.id);
});

app.delete('/delete/:id', (request, response)=>{                        // '/:id' = Parameter ( Params)
    console.log(request.params.id);                                     // how to use the params
});


app.get("/addition/:A/:B", (request, response) => {                     // Parameters for Operations example
    let num1 = parseInt(request.params.A);
    let num2 = parseInt(request.params.B);
    let result = num1 + num2;
    response.send(`The result is ${result}`);
});

app.get("/", (request,response) => {                                    // Parameters for navigation example
    response.write("<h1> <centre> Welcome to the Employee Database </centre> </h1>");
    response.write("<b> List of departments</b><br />");
    response.write("<a href='/department/1'>HR department</a><br />");
    response.write("<a href='/department/2'>IT department</a><br />");
    response.write("<a href='/department/3'>Sales department</a><br />");
});

app.get("/department/:id",(request,response) => {
    let dept = request.params.id;
    let deptName;
    if (dept == "1") {
        deptName ="HR department";
    };
    if (dept == "2") {
        deptName ="IT department";
    };
    if (dept == "3") {
        deptName ="Sales department";
    };
    response.write(`<h1> <centre> ${deptName} </centre> </h1>`);
    response.write("<a href='/'>Back</a><br />");
});