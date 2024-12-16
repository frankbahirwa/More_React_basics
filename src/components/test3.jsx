import { useState } from "react";
const Counter =() =>{
const [count , setCount] = useState(0)
const Handleencrease = () =>{
setCount(count +1)

}

const Handledecrease = ()=>{
setCount (count -1)

}
return(
<>
<p>
Current count :{count} 

</p>
<button onClick={Handleencrease}>Increase</button>
<button onClick={Handledecrease}>Decrease</button>
</>
)
}
export default Counter