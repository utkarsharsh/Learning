import {createSlice} from '@reduxjs/toolkit'

const slice= createSlice({
    name:'cart',
    initialState:{
        items:{
           11:{ poductid:11,number:1},
            12:{ poductid:12,number:1},
             13:{ poductid:13,number:1},
              14:{ poductid:14,number:1},
               15:{ poductid:15,number:1},
                16:{ poductid:16,number:1},
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