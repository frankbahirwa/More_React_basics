const express = require('express')
const app = express()
const PORT = 5001
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/DAvidKatss')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine' , 'ejs')

app.use(require('./routes/routes'))
app.listen(PORT , ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})