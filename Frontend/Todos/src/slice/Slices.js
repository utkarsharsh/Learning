import {createSlice} from '@reduxjs/toolkit'

 const slice= createSlice({
  name:"Slice",
  initialState:{
    totalitem:[],
    
  },
  reducers:{
    add :(state,action)=>{
      state.totalitem.push(action.payload);
    },

  }

});

export const {add} = slice.actions;
export default slice.reducer;