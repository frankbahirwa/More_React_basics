import Top from './components/index'
import Field from './components/field'
import Counter from './components/counter';
import Modes from './components/modeling';



const App =  ()=>{
  const dataset = [
    { type: 'text', name: 'username' , placeholder: 'Username' },
    { type: 'email', name: 'email' , placeholder: 'Email' },
    { type: 'password', name: 'password' , placeholder: 'Password' },
    { type: 'color', name: 'dates' , placeholder: ' dates ' },
    { type: 'hidden', name: 'hiddens'  , placeholder : 'hidden' },
  ];
  
   return (
      <>
     <Counter/>

     <Modes />

      {/* props  */}
      <p>hello world</p>
      <Top content = "This is Top component" />
      <div> 
        <form action="">
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

export default App