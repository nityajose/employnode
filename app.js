const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")
const pmodel = require("./models/employmodel")

var app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://nithya:college12345@cluster0.vcc79da.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})
app.get("/viewall",async( req,res)=>{
    let data=await pmodel.find()
    res.send(data)
})

app.post("/add",async(req,res)=>{
    let data=new pmodel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
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

