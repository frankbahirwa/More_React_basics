import { useState } from 'react'
import '../assets/css/index.css'
const Complete = ()=>{
  const [username , setusername] = useState('')
  const [password , setpassword] = useState('')
  const [email , setemail] = useState('')

  const Emails = (e)=>{
     e.preventDefault()
     setemail(e.target.value)
  }
  const Passwords = (e)=>{
     e.preventDefault()
     setpassword(e.target.value)
  }

  const usernames = (e)=>{

    e.preventDefault()
    setusername(e.target.value)
  }

  const Submits = (e)=>{
    e.preventDefault()
    alert(username + email + password)
  }


  return(
<>

<form action="" onSubmit={Submits}>
<p>Create Account</p>
<input type="text" value={username} onChange={usernames} name="username" id="usernmae" placeholder="enter the username" /> <br /><br />
<input type="email" value={email} onChange={Emails} name="email" id="email" placeholder="enter the email" /><br /><br />
<input type="password" value={password} onChange={Passwords} name="password" id="password" placeholder="enter the password" /> <br /><br />
<button type='submit'>Check</button>
</form>
</> 
    
  )

}

export default Complete