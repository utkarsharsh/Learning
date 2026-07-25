import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import {increase} from './redux/Slice'
import {decrease} from './redux/Slice'
function App() {
    const state=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
  return (<>
    
  
  {
    <div className='mydiv'>
      <h1>Id</h1>
     <p> {state}</p>
     <h1>Title</h1>
     <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
     
    </div>
  }
  
  
  
  </>)
    
  
  
}

export default App
