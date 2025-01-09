const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/DAVIDTOP')

app.set('view engine' , 'ejs')

app.get('/refe' , (req ,res)=>{
    // res.send('hello world') 
    res.render('index')
})

app.listen(PORT , (req , res)=>{
    console.log(`server is running on http://localhost:${PORT}`)
})