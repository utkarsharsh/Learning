import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import {add, deletes} from './slice/Slices.js'
function App() {
  const [count,setCount] = useState(0);
   const [name,setName] = useState("");
  const dispatch= useDispatch();

  function handleclick(){
   if(name!=""){
    dispatch(add({
      id:count,
      name:name
    }))
    setCount(count+1);
   }
  }

  function handleDelete(id){
    dispatch(deletes({id}))
  }

  const data= useSelector((state)=> state.counter.todos);

  

  return (
    <>
    <div className="App">
      <div>
        <input type='text' placeholder='write your task' onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={handleclick}>add</button>
      </div>
      
      <div>
        <div><h1>My list</h1></div>
       {
        data && data.map((e,idx)=>{
          console.log(e);
          return (<div >
         <h1> {e.taskname}</h1>
          
        <p>{e.completed==false ? "completing " : "completed"}</p>  
          <button onClick={()=>{handleDelete(e.id)}}>

            delete
          </button>
         
          
          </div>)
        })
       }

      </div>




    </div>
      
    </>
  )
}

export default App
