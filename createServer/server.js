const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    //Request Object
    // console.log(request)
    //Some Props of request that is useful when request from the frontend
    console.log(request.url);
    console.log(request.method);


    //Response Object
    // response.setHeader('content-type', 'text/plain');

    // response.setHeader('content-type', 'text/html')
    // response.write('<b>Hello, from Leng Leng</b>');
    // response.end();

    let path ='./views/';

    switch(request.url){
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me':
            //redirect purpose
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
        default: 
            path += '404.html'
            response.statusCode = 404;
    }

    //Send an HTML file
    // fs.readFile('./views/index.html', (err, data)=>{
    //     if(err){
    //         console.log(err);
    //         response.end()
    //     }
    //     response.write(data);
    //     response.end()
    // })


    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            response.end()
        }
        response.write(data);
        response.end()
    })
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on localhost:3000')
})