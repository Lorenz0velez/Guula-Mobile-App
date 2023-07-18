import axios from 'axios';
export const GET_ALL_RESTAURANTS = "GET_ALL_RESTAURANTS";


export const getAllCountries = () => {
  return async function(dispatch){
    try{
      let json = await axios.get(`http://192.168.100.226:3001/bares`)
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


