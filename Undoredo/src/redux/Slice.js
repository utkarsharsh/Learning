import {createSlice} from "@reduxjs/toolkit"


const TodoSlices= createSlice({
    name:'TodoSlice',
    initialState:{
      totalIdCount:0,
      item:[]
    }
    ,
    reducers : {
        add(state,action){
            const {id}=action.payload;
           for(let i=0;i<state.item.length;i++){
            if(state.item[i].id==id){
                state.item[i].count++;
                return;
            }
           }
           state.item.push(action.payload);
           state.totalIdCount++;
        },
        deletes(state,action){
           
        }

    }
});
export const {add,deletes}=TodoSlices.actions;
export default TodoSlices.reducer