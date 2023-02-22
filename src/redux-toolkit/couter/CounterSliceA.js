import { createSlice } from '@reduxjs/toolkit'
import { addTwo } from './CounterSliceB';

const counterSliceA = createSlice({
    name:"counterSliceA",
    initialState:0,
    reducers:{
        add(state,action){
            return state+1;
        },
        add5(state,action){
            return state+5;
        },
    },
    extraReducers:{
        [addTwo](state,action){
            return state+2;
        }     
    }
})

const  {actions,reducer}  = counterSliceA;

export const {add,add5} = actions;
export default reducer;


