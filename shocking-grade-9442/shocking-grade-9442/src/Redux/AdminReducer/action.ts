import axios from "axios";

import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, GET_USER_SUCCESS, SINGLE_USER_REQ, SINGLE_USER_SUCCESS, USER_REQ ,DELETE_DATA_FAILURE, DELETE_DATA_SUCCESS, GET_TOTAL_PAGE, POST_PRODUCT_SUCCESS} from "./actionType";


import { Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'; 
import { RootState } from ".";



// ****************page ************
export const fetchPage:any = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(`https://monkeyapi-2-0.onrender.com/products`); // Replace with your API endpoint
    //  console.log(response.data)
        dispatch({
          type: GET_TOTAL_PAGE,
          payload: response.data
        });
      } catch (error) {
        dispatch({
          type: FETCH_DATA_FAILURE,
        
        });
      }
    };
  };
// ****************page ************

  export const fetchData:any = (page:number) => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(`https://monkeyapi-2-0.onrender.com/products?_page=${page}&_limit=20`); // Replace with your API endpoint
     
      
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_DATA_FAILURE,
        
        });
      }
    };
  };



  type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;
  
  export const deleteData = (id: number):any => {
    return async (dispatch: Dispatch) => {
      try {
        await axios.delete(`https://monkeyapi-2-0.onrender.com/products/${id}`);
        dispatch({
          type: DELETE_DATA_SUCCESS,
          payload: id,
        });
      } catch (error) {
        dispatch({
          type: DELETE_DATA_FAILURE,
          
        });
      }
    };
  };

  interface productObj{
    name: string
    price: string
    about: string
    category: string
    brand: string
    rating:string
    avatar:string
    info:string
}

type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
  export const postProduct:any=(newprod:productObj): AppThunk=>(dispatch: Dispatch)=>{
   
    axios.post(`https://monkeyapi-2-0.onrender.com/products`,newprod)
    .then((res)=>{
            console.log(res.data);
        dispatch({type:POST_PRODUCT_SUCCESS})
    })
    
}


 export const fetchUserData:any=(dispatch: Dispatch)=>{
  dispatch({type:USER_REQ})

  axios.get(`https://monkeyapi-2-0.onrender.com/users`)
.then((res)=>{

  dispatch({type:GET_USER_SUCCESS,payload:res.data})
  })
 }


 export const SingleUserFetch:any=(id:number)=>(dispatch: Dispatch)=>{
  dispatch({type:SINGLE_USER_REQ})
  axios.get(`https://monkeyapi-2-0.onrender.com/users/${id}`)
  .then((res)=>{
console.log(res.data);

    dispatch({type:SINGLE_USER_SUCCESS,payload:res.data})
    })
 }




//  <*****************************Edit****************************************>
// export const updatedData=()=>(dispatch:any)=>{
//   axios
//   // .patch(`http://localhost:8080/products/${id}`,newData)
//   // .then((res)=>{
//     // dispatch({type:PATCH_PRODUCT_SUCCESS});
//   // })
//   // .catch((err)=>{
//     // dispatch(failureAction());
//   // })
// }