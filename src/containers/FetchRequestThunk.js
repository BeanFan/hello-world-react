import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as  fetchRequestThunkActions from "../actions/fetchRequestThunkActions";

import React from "react";
function FetchRequestThunk(props){





  const {
    fetchRequestThunkAction,
    isLoading,
    result,
    error
  } = props;


  return <div>
    <p><button onClick={()=>fetchRequestThunkAction.fetchPosts(200)} > Loading Request  </button></p>
    {isLoading && <div>Loding .........</div>}
    {!isLoading && !error && result.map((itemResut) => <p key={itemResut}>{itemResut}</p>)}
    {error && <div>ERROR -------------</div>}
  </div>



}

function mapStateToProps(state) {
  return state.fetchRequestThunkReducer;
}


function mapDispatchToProps(dispatch) {
  return {
    fetchRequestThunkAction: bindActionCreators(fetchRequestThunkActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchRequestThunk);

