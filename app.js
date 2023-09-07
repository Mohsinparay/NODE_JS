const express = require("express");
const sendMail = require("./sendmail.js");
const app = express();
let PORT = 5000;

app.get("/", (req,res)=>{
    res.send("i am a server");

});
app.get("/mail",sendMail);

const start = async()=>{
   try {
    app.listen(PORT,()=>{
console.log(`I AM RUNNING ON ${PORT}`);

    });
   } catch (error) {
    
   } 
};
start();