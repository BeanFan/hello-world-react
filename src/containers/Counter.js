import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import React from "react";

const  Counter = (props)=>{

        const {dispatch,value} = props; 

        return <div>
            <p><button onClick={()=>{dispatch({type:"add_count"})}} >add number </button></p>

            <p><button onClick={()=>{dispatch({type:"sub_count"})}} >sub number </button></p>

            <p><button onClick={()=>{dispatch({type:"sxxx_count"})}} >remove number </button></p>
           
             <p>Current count is {value}</p>   

        </div>


}

function mapStateToProps(state) {
    return state.counterReducer;
}
        
  
  function mapDispatchToProps(dispatch) {
    return {dispatch};
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

