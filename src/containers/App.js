import React from "react";
import FlexDirection from "../compoents/FlexDirection";
import {HashRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Flex from "../compoents/Flex";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import FetchRequest from "./FetchRequest";
import FetchRequestThunk from "./FetchRequestThunk";

export default function App(){
    // flex-direction:决定主轴的排列方向  row 从左到右，row-reverse  column column-reverse initial inherit 

    return <HashRouter>
        

        <p/><Link to="hello/flex-direction">flex-direction</Link>
        <p/><Link to="hello/flex-wrap">flex-wrap</Link>
        <p/><Link to="hello/flex-flow">flex-flow</Link>
        <p/><Link to="hello/4">4</Link>

        <div>
        <p>Redux </p>    
        <p/><Link to="redux/Counter">Counter Dispatch</Link>
        <p/><Link to="redux/Counter2">Counter BindActionCreater</Link>
        
        <p/><Link to="redux/SendRequest">SendReuqest</Link>
        <p/><Link to="redux/SendRequestThunk">SendReuqestThunk</Link>
       


        </div>
        <Routes>
            <Route path="hello/:id" element={<Flex/>}></Route>
            <Route path="redux/Counter" element={<Counter/>}></Route>
            <Route path="redux/Counter2" element={<Counter2/>}></Route>
            <Route path="redux/SendRequest" element={<FetchRequest/>}></Route>
            <Route path="redux/SendRequestThunk" element={<FetchRequestThunk/>}></Route>
        </Routes>
    </HashRouter>
}
