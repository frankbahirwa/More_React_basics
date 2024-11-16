import { useEffect } from "react"
import { useState } from "react"
import '../assets/css/index.css'

const Clock = ()=>{
  const [time , setTime] = useState(new Date())

  useEffect(()=>{
       const actual = setInterval(()=>{
                  setTime(new Date())
       } , 1000)  

       return ()=> clearInterval(actual)

  } , [])


  return(
<>

<h4 id="p">this is the current time : {time.toLocaleTimeString()}</h4>
</>
  )

}

export default Clock