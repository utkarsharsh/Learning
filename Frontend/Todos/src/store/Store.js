import {configureStore} from '@reduxjs/toolkit'
import counter from '../slice/Slices.js'
const store = configureStore({
    reducer:{
     counter:counter
    }
})

export default store;