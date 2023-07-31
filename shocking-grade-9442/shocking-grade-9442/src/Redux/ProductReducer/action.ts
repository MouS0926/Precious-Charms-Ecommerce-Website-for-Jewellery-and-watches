import axios from "axios";
import { ADDRESS_FAILURE, ADDRESS_REQUEST, ADDRESS_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"
import { useParams } from "react-router-dom";

/////Get Products
export const requestAction=()=>{
    return {type:PRODUCT_REQUEST}
  }
  export const getSuccessAction=(payload:any)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
  }
  export const failureAction=()=>{
    return {type:PRODUCT_FAILURE}
  }
  export const getProducts:any = (paramsObj:any) => (dispatch:any):void=>{
    // Complete get products functionality here
    // const{name}=useParams()
    // console.log(name)
    dispatch(requestAction())
    axios
    .get(`https://monkeyapi-2-0.onrender.com/products`,paramsObj)
    .then((res)=>{
      const totalPages = Math.ceil(res.headers['x-total-count'] / 12);
      // console.log(res.data)
      dispatch(getSuccessAction({product:res.data,totalPages:totalPages}))
    })
    .catch((err)=>{
      dispatch(failureAction());
      console.log(err)
    })
  
  };




  //////Post Address

  export const postProduct=()=>(dispatch:any)=>{
    dispatch({type:ADDRESS_REQUEST})
    axios
    .post("https://monkeyapi-2-0.onrender.com/products", )
    .then((res)=>{
        console.log(res.data);
        dispatch({type:ADDRESS_SUCCESS})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch(({type:ADDRESS_FAILURE,payload:err.message}))
    })
}


