import axios from 'axios';
export const GET_ALL_RESTAURANTS = "GET_ALL_RESTAURANTS";
export const GET_RESTAURANT_BY_ID = "GET_RESTAURANTS_BY_ID";
export const GET_RESTAURANT_BY_NAME = "GET_RESTAURANT_BY_NAME";


export const getAllRestaurants = () => {
  return async function(dispatch){
    try{
      let json = await axios.get(`/bares`) 
      return dispatch({
        type: GET_ALL_RESTAURANTS,
        payload: json.data
      })
    }catch(error){
    console.log(error);
    console.log('Esta entrando al catch! LA ACTION SI ESTA SIENDO VISTA')
    alert(error);
    }
  } 
}

export const getRestaurantByName = (name) =>{
  return async function(dispatch){
      try {
          var json = await axios.get(`/bares?name=${name}`)
          return dispatch({
              type: GET_RESTAURANT_BY_NAME,
              payload: json.data
          })
      } catch (error) {
          console.log(error)
          alert("Country Not Found")
      }
  }
}

export const getRestaurantById = (id) =>{
  return async function (dispatch) {
      try {
          var json = await axios.get(`/${id}`)
          return dispatch({
              type: GET_RESTAURANT_BY_ID,
              payload: json.data
          })
      } catch (error) {
          console.log(error)
          alert("Country Not Found")
      }
  }
}


