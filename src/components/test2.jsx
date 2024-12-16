import { useState } from "react";
import Field from "./field";
const Ap = () =>{
const dataset=[
{type:"text" ,name:"username" ,placeholder:"username"},
{type:"email" ,name:"email" ,placeholder:"email"},
{type:"passowrd" ,name:"password" ,placeholder:"password"}]

const counter = ()=>{
const [count ,setCount]=useState(0)
const Handleencrease = () =>{
setCount(count+1)
}
const Handledecrease = ()=>{
setCount(count-1)


}

return (
<>
content{count}
<button onClick={Handleencrease}>Increase</button>
<button onClick={Handledecrease}>Decrease</button>
</>
)
}
return (
<>
<form action="">
{dataset.map=(data , index) =>{
return (
<div key={index}>
<Field type={data.type} name={data.name} placeholder={data.placeholder}/>
</div>

)

}}
</form>

</>
)

}
export default Ap