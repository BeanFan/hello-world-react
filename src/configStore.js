import counterBReducer, {fetchRandomNumbersRducer,fetchRequest,fetchRandomNumbers,increment as incrementB, addTwo } from "./redux-toolkit/couter/CounterSliceB";
import counterAReducer, { add as addA, add5 } from "./redux-toolkit/couter/CounterSliceA";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";

const store = configureStore({
  reducer: {

    counterB: counterBReducer,
    counterA: counterAReducer,
    another:fetchRandomNumbersRducer
  }
});


[addA, incrementB, add5, addTwo].forEach(actionCreator => {
    store.dispatch(actionCreator());
    console.log(`After action '${actionCreator}': `, store.getState());
  });
  
  const mapState = state => state;
  
  const actionCreators = {
    addA,
    incrementB,
    addTwo,
    add5,
    fetchRandomNumbers,
    fetchRequest
  };
  
  function App({ counterA, counterB, another,addA, incrementB, addTwo, add5 ,fetchRandomNumbers, fetchRequest}) {
    const {number,loading,randomNumber} = counterB;
    const {randomNumberWay3} = another;
    return (
      <React.Fragment>
        <div className="App">
          <h1>Circular Slice Dependencies Example</h1>
        </div>
        <h2>Counter Values</h2>
        <ul>
          <li>
            <b>Counter A</b>: {counterA}
          </li>
          <li>
            <b>Counter B</b>: {number}
          </li>
          <li>
            <b>Random Number </b>: {randomNumber}
          </li>
          <li>
            <b>Random Number way3 by createRducer </b>: {randomNumberWay3}
          </li>
          <li>
            <b>loading Number </b>: {loading?<span>loading</span>:""}
          </li>
        </ul>
  
        <div>
          <button onClick={() => addA()}>Increment A</button>
          <button onClick={() => incrementB()}>Increment B</button>
          <button onClick={() => addTwo()}>Add Two to Both</button>
          <button onClick={() => add5()}>Add Five to Both</button>
          <button onClick={() => fetchRandomNumbers(10)}>fetch request </button>
          <button onClick={() => fetchRequest(10)}>fetch request old way </button>
        </div>
  
        <p>
          Notice that "Add Five" only adds to A, not B. This is caused by circular
          imports between the <code>counterA.tsx</code> and{" "}
          <code>counterB.tsx</code> files. When B imports <code>addFive()</code>{" "}
          from A, A hasn't finished initializing yet, so <code>addFive()</code> is
          still undefined.
        </p>
      </React.Fragment>
    );
  }
  
  const ConnectedApp = connect(
    mapState,
    actionCreators
  )(App);
  
  const rootElement = document.getElementById("root");

  createRoot(rootElement).render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    
  );
  
