import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FlexDirection from "./FlexDirection";
// import FlexFlow from "./FLexFlow";
// import FlexWrap from "./FlexWrap";


export default function Flex() {

    const params = useParams();
    const FlowFlowLoad = React.lazy(() => import( /* webpackChunkName: "FlexFlow" */ "./FLexFlow"));
    const FlexWrapLoad =
        React.lazy(() =>
            require.ensure([], (require) => {
                return require("./FLexWrap");
            }, (error) => { console.log("error")}, "sub-flex" )
        );


    function FlexWrapLazy() {
        return (
            <div>
                <Suspense fallback={<div>Loading FlexWrap...</div>}>
                    <FlexWrapLoad />
                </Suspense>
            </div>
        );
    }

    function FlexFlowLazy() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <FlowFlowLoad />
                </Suspense>
            </div>
        );
    }
    switch (params.id) {
        case "flex-direction":
            return <FlexDirection />;
        case "flex-wrap":
            return <FlexWrapLazy />;
        case "flex-flow":
            return <FlexFlowLazy />
        default:
            return <div>hello world</div>

    }


}