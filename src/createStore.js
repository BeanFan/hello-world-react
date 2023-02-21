import { combineReducers, createStore } from "redux";
import counterReducer  from "./reducer/CounterReducer";
import fetchRequestReducer from "./reducer/FetchRequestReducer";
import fetchRequestThunkReducer from "./reducer/FetchRequestThunkReducer"
import { applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";



const myThunkMiddileWare = ({dispatch,getState})=>(next)=>(action)=>{
    if(typeof action == "function"){
        return action(dispatch,getState);
    }else{
        return next(action);
    }

};

let store = createStore(
    combineReducers({counterReducer,fetchRequestReducer,fetchRequestThunkReducer}),
{counterReducer:{value:0}},
applyMiddleware(myThunkMiddileWare));

export {store};



