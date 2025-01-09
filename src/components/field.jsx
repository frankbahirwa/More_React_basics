import react from 'react'
const Field = ({type , name , placeholder})=>{
return(
<>
<input type={type} name={name} placeholder={placeholder} />
</>
)

}

export default Field