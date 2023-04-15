const express=require("express");
const app =express();

// app.use((req,res,next)=>{
//     // console.log("Hello from Middlewere");
//     next()
// });

const fs=require("fs");

const timeLogger=(req,res,next)=>{
    const startTime=new Date().getTime()
    next();
    const endTime=new Date().getTime()
    console.log(endTime-startTime)
}


app.use(timeLogger)

app.get("/",(req,res)=>{
    console.log("Hey from base route")
    res.send("Welcome")
})

app.get("/contacts",(req,res)=>{
    res.send("Contacts")
})


app.get("/about",(req,res)=>{
    res.send("About")
})

app.get("/blogs",(req,res)=>{
    res.send("Blogs")
})







app.listen(7640,()=>{
    console.log("Listening on port 7640")
})