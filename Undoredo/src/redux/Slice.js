import {createSlice} from "@reduxjs/toolkit"


const TodoSlices= createSlice({
    name:'TodoSlice',
    initialState:{
      item:{

      }
    }
    ,
    reducers : {
        add(state,action){
            const newitem=action.payload;
            const  {id} =action.payload;
             console.log(state.item[id],"ddd",id);
            if(state.item[id]==undefined){
            state.item={...state.item,[id]:newitem};}
            else{
                console.log("hhdd")
                  state.item[id].count++;
            }
                
        },
        deletes(state,action){
            const  {id} =action.payload;
            delete state.item[id];
        }

    }
});
export const {add,deletes}=TodoSlices.actions;
export default TodoSlices.reducer