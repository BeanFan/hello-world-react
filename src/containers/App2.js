import {fetchRequest,fetchRandomNumbers,increment as incrementB, addTwo } from "../redux-toolkit/couter/CounterSliceB";
import { add as addA, add5 } from "../redux-toolkit/couter/CounterSliceA";
import React,{Suspense}from "react";
import { HashRouter,Link,Route,Routes } from "react-router-dom";
import { connect } from "react-redux";
import {store} from "../configStore"
import FlexDirection from "../components/FlexDirection";
const mapState = state => state;
const actionCreators = {
  addA,
  incrementB,
  addTwo,
  add5,
  fetchRandomNumbers,
  fetchRequest
};

const LayLoadComponent =  React.lazy(()=>{
  return import(/* webpackChunkName:'sub_bean_inject_reducer' */"sub-inject-reducer")
  .then((lazy)=>{
      return  lazy.default(store.injectReducer);
    }
  )

});

// const params = useParams();

function App2(props) {

  const { counterA, counterB, another,addA, incrementB, addTwo, add5 ,fetchRandomNumbers, fetchRequest} = props;    const {number,loading,randomNumber} = counterB;
  const {randomNumberWay3} = another;
  return (
    <HashRouter>
        
    <>
    <div className="App">
        <h1>Circular Slice Dependencies Example</h1>
      </div>
      <h2>React-router</h2>
      <ul>
        <li><Link to="hello/zhangsan">hellolazyLoad</Link></li>
      </ul>
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


      <ul>
        <li>Flex Direction<FlexDirection /></li>

      </ul>

    <Routes>
       <Route path="hello/:name" element={<div>
        <Suspense fallback={<div>loading</div>}>
            <LayLoadComponent />
         </Suspense>
        </div>} >
       </Route>
       
    </Routes>
   
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
      </>
    
    </HashRouter>
  );
}

export default connect(mapState,actionCreators)(App2)

