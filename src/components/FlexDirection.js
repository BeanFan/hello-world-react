import React from "react";
import { Navigate, useParams } from "react-router-dom";
import "./FlexDirection.css";
export default function FlexDirection(props){    
       
    return <div className={"flex-direction"}>
        <div className="row">
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
        </div>
        <div className="row-reverse">
            <div>row-reverse</div>
            <div>row-reverse</div>
            <div>row-reverse</div>
            <div>row-reverse</div>
            <div>row-reverse</div>
        </div>

        <div className="column">
            <div>column1</div>
            <div>column2</div>
            <div>column3</div>
            <div>column4</div>
            <div>column5</div>
        </div>

        <div className="column-reverse">
            <div>column-reverse1</div>
            <div>column-reverse2</div>
            <div>column-reverse3</div>
            <div>column-reverse4</div>
            <div>column-reverse5</div>
        </div>

    </div>

}