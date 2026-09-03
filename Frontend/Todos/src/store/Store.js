import { configureStore } from "@reduxjs/toolkit"
import slice from '../slice/Slices.js'

const store = configureStore({
   
    reducer:{
        slice:slice
    }
})

export default store;