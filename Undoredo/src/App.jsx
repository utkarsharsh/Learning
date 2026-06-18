import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Undoredo from './undoredo/Undoredo'
import { useSelector,useDispatch } from 'react-redux'
import {add,remove} from './redux/Slice.js'
function App() {
  const [count, setCount] = useState(0)
  const data = useSelector((state) => state.cart.items);
  
  const dispatch=useDispatch();
 const x=12;
 const y=13;
 
  return (
    <>
    {
      Object.values(data).map((e,index)=>{
        console.log("dddd",e);
        return (
    <div key={index}>
    <h1>here we are {e?.poductid}</h1>
    <h1>here we are {e?.number}</h1>
    <button onClick={()=> dispatch(add({id:e?.poductid}))}>add {e?.poductid} </button>
     <button onClick={()=>dispatch(remove({id:e?.poductid}))}>remove {e?.poductid}  </button>
    </div>
)
      })
    }
    
    </>
  )
}

export default App
