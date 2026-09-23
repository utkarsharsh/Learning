import { useState,useMemo, useCallback } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Achild from './Achild'
import { Bchild } from './Bchild'
function App() {
  const [state1,setstate1] =useState(0);
  const [state2,setstate2] =useState(0);
  const [state3,setstate3] = useState(0);
  console.log('3',state3);
  
  const f= useCallback(()=>{
    function abc(){
    console.log("abc")
  };
   return abc;
  },[]);

  
return (<>
<Achild  prop={state1}/>
<Bchild prop={state2}/>

<p> State 3 value is {state3}</p>
<button onClick={()=>{
  setstate3(state3+1);
}}>click 1</button>
</>)


}

export default App
