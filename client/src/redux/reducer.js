import { GET_ALL_RESTAURANTS } from "./actions";


const initialState= {
    // allRestaurants:[],
    allRestaurants:[],  
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_ALL_RESTAURANTS:
            return{
                ...state,
                allRestaurants: action.payload,
            };

        default:
            return state;
    }
}

export default rootReducer;