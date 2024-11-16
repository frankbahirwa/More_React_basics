import { useState } from "react";

const Counter = ()=>{

const [count , setCount]  = useState(0)
    const HandleIncrease = ()=>{
       setCount(count + 1)
    }
    const HandleDecrease = ()=>{
       setCount(count -1)
    }
 
  return(
     <>
     <p>Current cout:{count} </p>
     <button onClick={HandleIncrease}>Increase</button>
     <button onClick={HandleDecrease}>Decrease</button>
      </>
  )

}

export default Counter