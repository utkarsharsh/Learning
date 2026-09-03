import { useState } from 'react'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { add } from './slice/Slices'

function App() {
 
 const dispatch=useDispatch();
 const data = useSelector((state)=>state.slice.totalitem);
  return (
    <>
    <div className="App">
     
       <h1>Welcome</h1>

       {
        data && data.map(()=>{
         return ( <h1>
            ee
          </h1>)
        })
       }

       <button onClick={()=>{
        dispatch(add({item:1}))}}>Add</button>

      </div>




  
      
    </>
  )
}

export default App
