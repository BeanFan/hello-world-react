const initState={value:0}
export default function counterReducer(state=initState,action){


    switch(action.type){
        case "add_count":
            return {value: state.value+1};
        case "sub_count":
            return {value: state.value-1};
        default:
            return state;
    }

}