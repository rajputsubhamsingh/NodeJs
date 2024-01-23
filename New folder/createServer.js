const http = require('http');

// http.createServer((req, resp) => {
//     resp.write("<h1>hello this is me</h1>");
//     resp.end();
// }).listen(4200);


const dataControl = (req, resp) => {
    resp.write("<h1>hello, this is me Shubham Singh</h1>");
    resp.end(); 
}



http.createServer(dataControl).listen(4200);