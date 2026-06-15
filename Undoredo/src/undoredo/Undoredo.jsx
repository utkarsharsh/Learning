import React, { useState } from 'react'

const Undoredo = () => {

    const [inputs,setinputs]=useState("");
    const [array,setarray]=useState([]);
    const [index,setindex] =useState(0);
  
    

     
    function handlechanges(e){
   setinputs(e.target.value);
   
   setarray((pre)=>[...pre,e.target.value]);
   setindex((pre)=>array.length-1);
   console.log(array);
   
    }
    function handleundo(e){
      setindex(index-1);
    }
    function handleredo(e){
      setindex(index+1);
    }




  return (
    <div>
   
     <input type='text' placeholder='Enter text here' onChange={handlechanges} value={array[index]} />

 <button onClick={handleundo}> 
    undo
 </button>


 <button onClick={handleredo}> 
  Redo
 </button>

    </div>
  )
}

export default Undoredo