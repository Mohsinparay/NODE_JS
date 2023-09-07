const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on('request',(req,res)=>{
   
//     fs.readFile("input.txt","utf-8",(err,data)=>{
//         if (err) return console.log(err);
// res.end(data);  
//   });
//reading fram a stream
// const rstream = fs.createReadStream("input.txt");
// res.end(rstream); 
// rstream.on('data', (chunkdata)=>{
// res.write(chunkdata);
// // res.end(chunkdata);

// });
// rstream.on('end',()=>{
//     res.end()
//3rd war to read stream// })
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res)

});

server.listen(3000,"127.0.0.1");
console.log("Server is running on port 3000")