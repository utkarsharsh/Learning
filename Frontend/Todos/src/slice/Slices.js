import {createSlice} from '@reduxjs/toolkit'


const slice= createSlice({
  name:'count',
  initialState:{
    task:[]
  },

  reducers:{
    add: (state,action)=>{
         state.task.push(action.payload);
    }
  }
});

export const {add} =slice.actions;
export default slice.reducer;