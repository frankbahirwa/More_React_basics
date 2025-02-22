const User = require('../models/userModel')

function getForm(req ,res){
    res.render('form')
}



async function Select(req ,res){
    const users = await User.find()
    res.render('list' , {users})
}

async function Register(req , res){

    const {username , email , password } = req.body 
    const newUser = new User({username:username ,email:email , password:password })
    await newUser.save()
    res.redirect('/list')
      
 }

module.exports = {
    Register ,
    Select,
    getForm
}