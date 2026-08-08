import { useState } from 'react'
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import { increase, increaseBy } from './slice/Slices';

function App() {
  const [count,setCount] = useState(0);
  const dispatch= useDispatch();
  const data = useSelector((state)=> state.counter.count);
  

  return (
    <>
    <div className="App">
     
        <h1>{data}</h1>
        <button onClick={()=>{dispatch(increaseBy(6))}}> Increase</button>

      </div>




  
      
    </>
  )
}

export default App
