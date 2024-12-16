import { useState } from "react";
const Complet = () =>{
const [username, setusername]=useState('')
const [password ,setpassword]=useState('')
const [email, setemail]=useState('')
const Username =(e)=>{
e.preventDefault()
setusername(e.target.value)

}
const Email =(e) =>{
e.preventDefault()
setemail(e.target.value)
}
const Password =(e) =>{
e.preventDefault()
setpassword(e.target.value)
}
const Submites = (e)=>{
e.preventDefault()
alert(password + username + email)
}
return(
<>
<form action="" onSubmit={Submites}>
<p>create account</p>
<input type="text" value={username}name="username" onChange={Username} placeholder="username"/>
<input type="email" value={email} name="email" onChange={Email} placeholder="email"/>
<input type="password" value={password} name="password" onChange={Password} placeholder="password"/>
<button type="submit">send</button>
<button type="reset">cancel</button>
</form>
</>
) 
}
export default Complet