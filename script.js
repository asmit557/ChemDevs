const express = require('express')
const app = express()

app.set("view engine","ejs");
app.use(express.static('./public'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render("index")
})

app.get('/fluidflow', (req, res) => {
  res.render("fluidflow")
})

app.get('/index', (req, res) => {
  res.render("index")
})
app.get('/chemicalkinetics' , (req,res)=>{
  res.render("chemicalkinetics")
})
app.get('/distillation' , (req,res)=>{
  res.render("distillation")
})
app.get('/masstransfer' , (req,res)=>{
  res.render("masstransfer")
})
app.get('/heattransfer' , (req,res)=>{
  res.render("heattransfer")
})
app.get('/thermodynamics' , (req,res)=>{
  res.render("thermodynamics")
})
app.listen(3000)
