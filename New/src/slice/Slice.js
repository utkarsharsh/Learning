import {createSlice} from  '@reduxjs/toolkit'

const slices = createSlice({
    name:'todo',
    initialState:{
        total:0,
        task:[]
    },
    reducers:{
        add : (state,action)=>{
          state.task.push(action.payload);
          state.total=state.total+1;
        },
        rem : (state,action)=>{
        state.task=   state.task.filter((e)=>{

             if(e.total!=action.payload) return true;
             return false;
          })
         
        },
        
    }

});

export const {add,rem} =slices.actions;
export default slices.reducer;