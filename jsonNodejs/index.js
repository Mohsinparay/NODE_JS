const fs = require("fs");

const biodata = {
name: "mohsin",
age:19,
country:"india"
}; 


// {"name":"MOhsin","age":26,"country":"india"}

// console.log(biodata.name);
// console.log(biodata.age);
// console.log(biodata.country);
// console.log(biodata.name);
const json = JSON.stringify(biodata);
// console.log(json);
// fs.writeFile('json2.json',json,(err)=>{
    
// });
fs.readFile("json1.json","utf-8" ,(err,data)=>{

const ogdata = JSON.parse(data)
console.log(ogdata);
console.log(data);
});

// console.log(json.1);