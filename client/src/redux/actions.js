import axios from 'axios';
export const GET_ALL_RESTAURANTS = "GET_ALL_RESTAURANTS";


export const getAllRestaurants = () => {
  return async function(dispatch){
    try{
      let json = axios.get(`http://localhost:3001/bares`)
      return dispatch({
        type: GET_ALL_RESTAURANTS,
        payload: (await json).data
      })
    }catch(error){
    console.log(error);
    alert(error);
    }
  } 
}
