const fs = require("fs");
// fs.writeFile('index.txt', "hello NEW ASYNC", (err)=>
// {
//     console.log("file created successfully");
//     console.log(err);
// }
// );
// fs.appendFile("index.txt", " i added the text here!!!!!", (err)=>{
//   console.log("data inserted successfully");

// })
// fs.readFile("index.txt", "UTF-8",(err,data)=>{
//    console.log(data);
// });
// console.log("will be executed first");


// fs.mkdir("newfolder",(err)=>{
//     console.log("");
// });
path = "newfolder";
fs.writeFile(`${path}/created.txt`,"Hello inserted successfully",(err)=>{
    
});

fs.appendFile(`${path}/created.txt`," NEXT DATA INSERTED HERE ",(err)=>{
    console.log("");
});
fs.readFile(`${path}/created.txt`, "UTF-8",(err,data)=>{
   console.log(data);
});
// fs.rename(`${path}/index.txt`,`${path}/created.txt`,(err)=>{
//     console.log(err);
// });
fs.unlink(`${path}/created.txt`,(err)=>{
console.log("file removed successfully");
});
fs.rmdir(`${path}`, (err)=>{
    console.log("folder removed successfully");
});
