import { createAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";

import { add5 } from "./CounterSliceA";
const send = (number) => {
    const delay = (time) => {
        return (data) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(data)
                }, time);
            });
        }
    };
    return new Promise((resolve, reject) => {
        resolve(Array.from({ length: number }, () => Math.random()));
    }).then(delay(4000));
}


const fetchRandomNumbers = createAsyncThunk(
    'Number/fetchRandomNumberStatus',
    async (number, thunkAPI) => {
        const response = await send(number)
        return response
    }
);

export const fetchRandomNumbersRducer = createReducer(
    {randomNumberWay3:0},
    {[fetchRandomNumbers.fulfilled]:(state,action)=>{
        return {...state,randomNumberWay3:action.payload[0]}   
    }}
);



const counterSliceB = createSlice({
    name: "sliceB",
    initialState: { number: 0, randomNumber: 0, loading: false },
    reducers: {
        increment(state, action) {
            return { ...state, number: state.number + 1 }
        },
        addTwo(state, action) {
            return { ...state, number: state.number + 2 }
        },
        addTwo(state, action) {
            return { ...state, number: state.number + 2 }
        },
        fetchSuccess(state, action) {
            return { ...state, randomNumber: state.randomNumber }
        },
        fetchRequest:{
            reducer:(state,action)=>{
                state.randomNumber == 1000;
            },
            prepare:(payload)=>{
                return {payload:123};
            }
        }

    },

    

    //case1:
    /**
    extraReducers: (builder) => { // first way 
          builder.addCase(fetchRandomNumbers.fulfilled, (state, action) => {
            // Add user to the state array
            return {...state,loading:false,randomNumber:action.payload[0]}   
          }).addCase(add5,(state,action)=> {return {...state,number:state.number+5}}   
  
          ).addCase(fetchRandomNumbers.pending,(state,action)=>{
              return {...state,loading:true}
          });
        */

    extraReducers: {  // second way 
        [add5](state, action) {
            state.number += 5;
        },
        [fetchRandomNumbers.fulfilled]:(state,action)=>{
            return {...state,loading:false,randomNumber:action.payload[0]}   
        },
        [fetchRandomNumbers.pending]:(state,action)=>{
              return {...state,loading:true}
        }
    }
}

);



console.log(counterSliceB);
console.log("addFive, imported from A to B: ", add5);

const { actions, reducer } = counterSliceB;

export const { increment, addTwo,fetchRequest } = actions;
export { fetchRandomNumbers };
export default reducer;
