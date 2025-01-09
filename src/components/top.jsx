import react from 'react'
import Field from './field';
const Appp =  ()=>{
  const dataset = [
    { type: 'text', name: 'username' , placeholder: 'Username' },
    { type: 'email', name: 'email' , placeholder: 'Email' },
    { type: 'password', name: 'password' , placeholder: 'Password' },
    { type: 'color', name: 'dates' , placeholder: ' dates ' },
    { type: 'hidden', name: 'hiddens'  , placeholder : 'hidden' },
  ];
  
   return (
      <>

      <div> 
        <form action="" style={{background:'black',}}>
        {dataset.map((data , index)=>{
        return (
          <div key={index}>
            <Field type={data.type} name={data.name} placeholder={data.placeholder}/> <br /><br />
          </div>
        )
      })}
        </form>
      </div>


      </>
   )

}

export default Appp