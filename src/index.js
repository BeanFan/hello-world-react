import App2 from "./containers/App2"
import React  from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import {store} from "./configStore";
ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <Provider store={store}><App2/></Provider>);

