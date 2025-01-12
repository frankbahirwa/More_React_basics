
/*const express = require('express')
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
    
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 5000;

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/DAVIDTOP')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Route to render the EJS template
app.get('/refe', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


*/

const express= require('express');
const mongoose=require('mongoose');
const app=express();
const PORT=5000;
//connect to mongodb
mongoose
.connect('mongodb://localhost:27017/')
.then(() =>console.log('connect to mongodb'))
.catch((err) => console.log('failed to connect to mongodb:',err))

//set Ejs as the tempolate engine
app.set('view engine', 'ejs');

//Route for the root path

app.get('/', (req, res) =>{


})


app.listen(PORT,() =>{
console.log(`server is running on http://localhost:${PORT}`);

});


