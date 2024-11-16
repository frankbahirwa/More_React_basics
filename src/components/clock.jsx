import { useEffect } from "react"
import { useState } from "react"
import '../assets/css/index.css'

const Clock = ()=>{
  const [times , setTime] = useState(new Date())

  useEffect(()=>{
       const actual = setInterval(()=>{
                  setTime(new Date())
       } , 1000)  

       return ()=> clearInterval(actual)

  } , [])


  return(
<>

<h4 id="p">this is the current time : {times.toLocaleTimeString()}</h4>
</>
  )

}

export default Clock