import { UPDATE_NEWS } from "./actions";

// const initialState={
//     articles:[]
// }

function NewsReducer(state=[],action){
    switch (action.type){
        case UPDATE_NEWS:
            return {...state,articles:action.payload};
        default:
            return state;
    }  
}

export default NewsReducer;