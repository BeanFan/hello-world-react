import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";   

export default function FlexWrap(){


    const FlexWrapWrapper = styled.div`
            margin-bottom: 1rem;
            border: 1px solid red;
            .nowrap{
                display: flex;
                
                flex-wrap: nowrap;
            }           
            .wrap{
                display: flex;  
                flex-wrap: wrap;
            } 
            .wrap-reverse{
                display: flex;
                flex-wrap: wrap-reverse;
            }
            div{
                border: 1px solid yellow;
                margin-bottom: 1rem;
                div
                {
                border:1px solid blue;
                margin: 1px;
                }
            }
            
        
    `
     


    return <FlexWrapWrapper>
        <div className={"nowrap"}>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
        </div>
        <div className={"wrap"}>
            <div>row-reverse1</div>
            <div>row-reverse2</div>
            <div>row-reverse3</div>
            <div>row-reverse4</div>
            <div>row-reverse5</div>
            <div>row-reverse6</div>
            <div>row-reverse7</div>
            <div>row-reverse8</div>
            <div>row-reverse9</div>
            <div>row-reverse10</div>
            <div>row-reverse11</div>
            <div>row-reverse12</div>
            <div>row-reverse13</div>
        </div>

        <div className={"wrap-reverse"}>
            <div>column1</div>
            <div>column2</div>
            <div>column3</div>
            <div>column4</div>
            <div>column5</div>
            <div>column6</div>
            <div>column7</div>
            <div>column8</div>
            <div>column9</div>
            <div>column10</div>
            <div>column11</div>
            <div>column12</div>
        </div>

        
    </FlexWrapWrapper>

}