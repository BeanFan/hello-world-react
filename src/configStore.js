import counterBReducer, {fetchRandomNumbersRducer } from "./redux-toolkit/couter/CounterSliceB";
import counterAReducer from "./redux-toolkit/couter/CounterSliceA";
import { combineReducers, configureStore } from "@reduxjs/toolkit";



const createReducer = (asyncReducers={})=>{
  return combineReducers({
    counterB: counterBReducer,
    counterA: counterAReducer,
    another:fetchRandomNumbersRducer,
    ...asyncReducers
  });
}



const  configStoreWithInject = ()=>{
  
  const store = configureStore({
    reducer: createReducer()
  });

  store.asyncReducers = {};
  store.injectReducer = (key,asyncReducer)=>{
    console.log("inject again");
    if(!store.asyncReducers[key]){
      store.asyncReducers[key] = asyncReducer
      store.replaceReducer(createReducer(store.asyncReducers));
    }else{

      console.error(`reduer ${key} has been feined `);
    } 
  }

  return store
}

const store = configStoreWithInject();

export  {store};


 
  
