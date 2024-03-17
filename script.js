const express = require('express')
const router=require('./routes')
const app = express()
app.use(express.json());
app.use(router);

app.set("view engine","ejs");
app.use(express.static('./public'));
app.listen(3000)
