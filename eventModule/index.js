const EventEmitter = require("events");
const event = new EventEmitter();
//  event.on("saymyname", ()=>{
//     console.log("MY name is mohsin");

//  });
//  event.on("saymyname", ()=>{
//     console.log("MY name is mohsin");

//  });
 event.on("checkmypage", ()=>{
    const sc = 200;
    const msg = "OK"
    console.log(`status code ${sc} and the page is ${msg}`);
    
 });
 event.emit("checkmypage");