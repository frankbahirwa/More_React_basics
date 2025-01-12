const express= require('express');
const mongoose=require('mongoose');
const app=express();
const PORT=3000;
//connect to mongodb
mongoose
.connect('mongodb://localhost:27017/')
.then(() =>console.log('connect to mongodb'))
.catch((err) => console.log('failed to connect to mongodb:',err))

app.listen(PORT,() =>{
console.log(`server is running on http://localhost:${PORT}`);

});