import {configureStore} from '@reduxjs/toolkit'
import todo from '../slice/Slice.js'
const store= configureStore({
    reducer:{
        todo:todo
    }
})
export default store;