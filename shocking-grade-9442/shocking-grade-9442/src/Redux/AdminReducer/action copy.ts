import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, GET_USER_SUCCESS, USER_REQ } from "./actionType";





export const fetchData = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://monkeyapi-2-0.onrender.com/products?_page=${page}&_limit=20`);
      
  const totalaPages=Math.ceil(response.headers["x-total-count"]/20)

   dispatch({
        type: FETCH_DATA_SUCCESS,
        payload:
        {
          data: response.data,
          totalPages:totalaPages
        }
       
       
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
      });
    }
  };
};


 export const fetchUserData:any=(dispatch: Dispatch)=>{
  dispatch({type:USER_REQ})

  axios.get(`https://monkeyapi-2-0.onrender.com/users`)
.then((res)=>{

  dispatch({type:GET_USER_SUCCESS,payload:res.data})
  })
 }