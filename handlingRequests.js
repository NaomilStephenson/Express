app.get('/read', (request, response)=>console.log('fetch'));            // Get  = read

app.post('/create', (request, response)=>console.log('create'));        // Post = create new

app.put('/replace', (request, response)=>console.log('replace'));       // Put = Replace

app.patch('/update', (request, response)=>console.log('update'));       // Patch = for partial updates

app.delete('/delete', (request, response)=>console.log('delete'));      // Delete

app.delete('/home', (request, response)=>{                              // '/home' = Path / Route
    console.log(request.params.id);
});

app.delete('/delete/:id', (request, response)=>{                        // '/;id' = Parameter ( Params)
    console.log(request.params.id);                                     // how to use the params
});
