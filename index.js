const express=require("express");
const app =express();

app.use(()=>{
    console.log("Hello from Middlewere");
});




app.get("/",(req,res)=>{
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