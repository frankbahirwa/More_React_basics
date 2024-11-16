import { useState } from "react"

const Modes = ()=>{
      const [password , setpassword] = useState('')
      const [username  , setusername] = useState('')

      const States = (e)=>{
        e.preventDefault()
        setpassword(e.target.value)
      }

      const HandleUsername = (e)=>{
         e.preventDefault()
         setusername(e.target.value)
            
      }

      const HandleSubmit = () =>{
          alert(password + '<br>' + username)
      } 

   return(
<>
<form action="#" method="post" onSubmit={HandleSubmit}>
<p>{password}</p>  <br /><br /> 
<input type="text" value={username} name="usernmae" id="usernmae" onChange={HandleUsername} />
<input type="password" value={password} name="password" id="password" placeholder="enter the password" onChange={States} /> <br /> <br />
<input type="password" value={password} name="password" id="password" placeholder="Confirm password" onChange={States} /><br /> <br />
<p>{password}</p> <br /><br />
<button type="submit">Check</button>
</form>
</>
   )

} 

export default Modes