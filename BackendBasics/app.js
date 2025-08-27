const express=require("express")
const app=express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.send("About")
})

app.get("/contact",(req,res)=>{
    res.send("Contact")
})

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})

//res.send() is the correct method to send data to the client using express