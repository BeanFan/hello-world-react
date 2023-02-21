import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as  fetchRequestActions from "../actions/fetchRequestActions";

import React from "react";
function FetchRequest(props){





  const {
    dispatch,
    fetchAction,
    isLoading,
    error,
    errorMessage,
    result = [] } = props;


  const send = () => {
    const delay = (time) => {
      return (data) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data)
          }, time);
        });
      }
    };
    return new Promise((resolve, reject) => {
      resolve(Array.from({ length: 10 }, () => Math.random()));
    }).then(delay(4000));
  }


  const fetchPosts = (dispatch) => {

    dispatch(
      {type:"FETCH_LOADING",
      payload:""
      }

    );
    return send().then(data => {
      dispatch(
       
        {type:"FETCH_SUCCESS",
        payload:data}
      )
    })
  };

  return <div>
    <p><button onClick={() => { fetchPosts(dispatch) }} > Loading Request  </button></p>
    {isLoading && <div>Loding .........</div>}
    {!isLoading && !error && result.map((itemResut) => <p key={itemResut}>{itemResut}</p>)}
    {error && <div>ERROR -------------</div>}
  </div>



}

function mapStateToProps(state) {
  return state.fetchRequestReducer;
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchAction: bindActionCreators(fetchRequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchRequest);

