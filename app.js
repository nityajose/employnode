const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")

var app=express()

app.get("/",( req,res)=>{
    res.send("welcome to my employ website")
})

app.get("/add",(req,res)=>{
    res.send("welcome to employ entry page")
})

app.get("/search",(req,res)=>{
    res.send("employ search page")
})

app.get("/delete",(req,res)=>{
    res.send("employ delete page")
})

app.get("/edit",(req,res)=>{
    res.send("employ edit page")
})



app.listen(3000)

