import { configureStore } from "@reduxjs/toolkit";
import Slicereducer from '../redux/Slice.js'
export const mystore= configureStore({
    reducer :{
        cart :Slicereducer
    }
});