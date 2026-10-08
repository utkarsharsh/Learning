import React, { useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import { add ,rem} from './slice/Slice.js';
function App() {
  const [inp,setinp]=useState("");
  const alltask= useSelector((state)=> state.todo.task);
  const total= useSelector((state)=> state.todo.total);
  const dispatch=useDispatch();
 
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      
      <input type='text' onChange={(e)=>{setinp(e.target.value)}}/>
      <button onClick={()=>{
     dispatch(add({
     total,
     value:inp
     }))
      }}>Add</button>


      <div>
        All taskes:
        {
          alltask && alltask.map((e,idx)=>{
            return (
            <div key={idx}>
            <>
            {e?.value}
            <button onClick={()=>{
              console.log(e?.total)
              dispatch(rem(e.total));
            }}>Remove</button>

            </>
            </div>)
          })
        }

      </div>
    </div>
  )


}

export default App
