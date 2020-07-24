const http = require('http');
const fs = require('fs'); //fiesystem
const path = require('path');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        if (req.method == 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1> ' + 'Hello World, Welcome to Wejapa Internships' +
            ' </h1></body></html>');
            return;
        }
        else if (req.method === 'POST' && typeof req.body.name !== "undefined" ) {
            let name = req.body.name;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1> ' + `Hello ${name}, Welcome to Wejapa Internships` +
            ' </h1></body></html>');
            return;
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1> Error 404: ' +
            ' not found </h1></body></html>');
            return;
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1> Error 404: ' +
        ' not found </h1></body></html>');
        return;
    }
    

});
server.listen(port, hostname, () => {
    console.log(`Server runnig at http://${hostname}:${port}`);
} );