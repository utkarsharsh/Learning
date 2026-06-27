import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { add   } from './redux/Slice'
function App() {
    
  const dispatch=useDispatch();
  const value=useSelector((state) => state.TodoSlice.item);
 
  const id= useSelector((state) => state.TodoSlice.totalIdCount);
  console.log(value)
  // const array= Object.values(value);
  return (
    
    <>
    {
      value.map((e,index)=>{
        return <>
       <h1> {e.name}</h1>
        </>

      })
    }
    <button  onClick={()=>{
      let dummy=
        {
         id,
          name:"qqq",
          count:0  
        }
      
      dispatch(add(dummy))
    }}>Addd</button>
    
    </>
  )
}

export default App
