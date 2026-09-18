import { useState } from 'react'
import './App.css'


function App() {

  const [data,setdata]=useState({});


   
  return (
    <>
    <div>
      <input type="text" placeholder='Enter your task' name="add" 
      onChange={(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
      }}/>
      <button onClick={()=>{console.log(data)}}>Submit</button>
    </div>
   
     


  
      
    </>
  )
}

export default App
