import {createSlice} from '@reduxjs/toolkit'

const slice= createSlice({
    name:'cart',
    initialState:{
        items:{
          
        }
         
    },

    reducers : {
        add  (state,action){
const {id}=action.payload;
if(state.items[id]!= undefined){
   
state.items[id].number +=1;
}
else
state.items[id]={poductid: id, number:1};

},

remove(state,action){
const {id}=action.payload;
delete state.items[id];

}


    }
});

export const {add ,remove} =slice.actions;

export default slice.reducer;