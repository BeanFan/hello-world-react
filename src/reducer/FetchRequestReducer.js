const FETCH_LOADING = "FETCH_LOADING";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

export default function Post(state={
    isLoading:false,
    error:false,
    errorMessage:"",
    result:[]

},action){

    switch(action.type){
        case FETCH_LOADING:
            return {...state,isLoading:true};
        case FETCH_SUCCESS:
            return {...state,result:action.payload,isLoading:false,isERROR:false};
        case FETCH_ERROR:
            return {...state,isLoading:false,error:true};
        default:
            return state;
            
    }

}