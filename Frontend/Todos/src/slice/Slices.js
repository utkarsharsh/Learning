import {createSlice} from '@reduxjs/toolkit'


// state
// {
//     Id, tansname , completed
// }


const counter=createSlice({
    name:'counter',
    initialState:{
      todos:[]
    },
    reducers:{
        add:(state,action)=>{
         state.todos.push({
            id:action.payload.id,
            taskname:action.payload.name,
            completed:false,
         })
        },
        deletes:(state,action)=>{
       state.todos=  state.todos.filter((e)=>{
           if(e.id!=action.payload.id)  return true;
           return false;
         })
    }
}});

export const {add,deletes } =counter.actions ;
export default counter.reducer ;