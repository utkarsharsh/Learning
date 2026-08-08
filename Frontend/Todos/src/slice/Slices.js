import {createSlice} from '@reduxjs/toolkit'

const slice= createSlice({
  name:'counter',
  initialState:{
   count:0
  },
  reducers:{
    increase: (state)=>{
   state.count=   state.count+1;
    },
    increaseBy: (state,action)=>{
   state.count=   state.count+ action.payload;
    }

  }
})


export const  { increase,increaseBy }=slice.actions;
export default slice.reducer;