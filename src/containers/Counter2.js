import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as CounterActions from "../actions/CounterActions";
import React from "react";

const  Counter2 = (props)=>{

        const {dispatch,value,counterAction} = props; 

        const add = ()=>{
           counterAction.addNumber();
        }
        const sub = ()=>{
          counterAction.subNumber();
       }

        return <div>
            <p><button onClick={add} >add number </button></p>

            <p><button onClick={sub} >sub number </button></p>

             <p>Current count is {value}</p>   

        </div>


}

function mapStateToProps(state) {
    return state.counterReducer;
}
        
  
  function mapDispatchToProps(dispatch) {
    return {counterAction:bindActionCreators(CounterActions,dispatch)}
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter2);

