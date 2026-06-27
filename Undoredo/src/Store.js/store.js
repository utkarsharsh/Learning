import { configureStore } from "@reduxjs/toolkit";
import TodoSlices from "../redux/Slice";
const store=configureStore({
   
   reducer:{
          TodoSlice:TodoSlices
    },
})

export default store;