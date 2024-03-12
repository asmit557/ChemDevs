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

app.listen(3000)
