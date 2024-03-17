const express = require('express')
const router =express.Router();


router.get('/', (req, res, next) => {
    res.render("index")
  })
  
  router.get('/fluidflow', (req, res, next) => {
    res.render("fluidflow")
  })
  
  router.get('/index', (req, res, next) => {
    res.render("index")
  })
  router.get('/chemicalkinetics' , (req, res, next)=>{
    res.render("chemicalkinetics")
  })
  router.get('/distillation' , (req, res, next)=>{
    res.render("distillation")
  })
  router.get('/masstransfer' , (req, res, next)=>{
    res.render("masstransfer")
  })
  router.get('/heattransfer' , (req, res, next)=>{
    res.render("heattransfer")
  })
  router.get('/thermodynamics' , (req, res, next)=>{
    res.render("thermodynamics")
  })
  router.get('/rateconstant' , (req, res, next)=>{
    res.render("rateconstant")
  })
  module.exports = router;