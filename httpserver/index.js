const { response } = require("express");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res)=>{


    const data = fs.readFileSync(`${__dirname}/userAPI/userapi.json`,"utf-8");
        const ogjdata = JSON.parse(data);
        // res.end(ogjdata[1].password);
            
    // console.log(req.url)
if (req.url == "/") {
    res.end("hello from home side");
}
else if (req.url =="/contact") {
    res.end('Hello from the contact us side');
 
}
else if (req.url =="/userapi") {
    res.writeHead(200, {"content-type":"application/json"});
    
   res.end(ogjdata[0].firstname);
 
}
else if (req.url=="/about") {
    res.end('Hello from the about us side');
 
}
else{
    res.writeHead(404, {"content-type":"text/html"});
    res.end("<button>404 NOT FOUND</button>")
}


});

server.listen(4000, "127.0.0.1",()=>{
    console.log("Listening to porn number 3000");
});

