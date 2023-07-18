import { GET_ALL_RESTAURANTS, GET_RESTAURANT_BY_ID, GET_RESTAURANT_BY_NAME } from "./actions";


const initialState= {
    // allRestaurants:[],
    allRestaurants:[],
    restaurantDetail:[],
    restaurantFilteredByName:[]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_ALL_RESTAURANTS:
            return{
                ...state,
                allRestaurants: action.payload,
            };

        case GET_RESTAURANT_BY_ID:
            return{
                ...state,
                restaurantDetail: action.payload,
            };
        case GET_RESTAURANT_BY_NAME:
            return{
                ...state,
                restaurantFilteredByName: action.payload,
            };

        default:
            return state;
    }
}

export default rootReducer;