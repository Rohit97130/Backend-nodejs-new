const http = require('http');

const fs = require('fs');


let JsonData = fs.readFileSync(__dirname + '/data.json');




let Server  = http.createServer((req,res)=>{
    console.log('Server Started');
    // res.setHeader('content-type' , 'text/html');
    // res.end('Hello Jhhhi');
    res.setHeader('content-type' , 'text/json')
    res.end(JsonData);
})

Server.listen(8081);

