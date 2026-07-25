import {createSlice} from '@reduxjs/toolkit'
const Slice=createSlice({
    name:'counter',
    initialState:{
     count:0
    },
    reducers:{
        increase:(state,action)=>{
            state.count++;
        },
        decrease:(state,action)=>{
            state.count--;
            if(state.count<0) state.count=0;
        },
    }
});
export const {increase,decrease}=Slice.actions;
export default Slice.reducer;