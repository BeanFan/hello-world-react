import React, { Suspense } from "react";
import {store} from "../configStore"
import DaymanicInject from "sub-inject-reducer";
export default function LazyLoadWithReducer() {

   const LayLoadComponent = DaymanicInject(store.injectReducer);

   

    // const params = useParams();
    return (<div>32132
            <Suspense fallback={<div>loading</div>}>
                <LayLoadComponent />
             </Suspense>
            </div>
    );
}

