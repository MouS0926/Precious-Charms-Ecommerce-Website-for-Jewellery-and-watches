import { Dispatch } from "redux";
import { UserObject } from "../../constrain";
import { ADD_ITEM, DELETE_ITEM, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType"
import axios from "axios";
const url = "/users"
export const getUsers =()=>{
   return async(dispatch:Dispatch<{type:string}|{type:string,payload:UserObject[]}>):Promise<void>=>{
      dispatch({type:USER_REQUEST});
   axios.get(`https://monkeyapi-2-0.onrender.com/users`).
   then((response)=>{ dispatch({type:USER_SUCCESS,payload:response.data}); }).catch(()=>{
    dispatch({type:USER_FAILURE});

   });

   }
}

export const SignUp= (newUser:UserObject)=>(dispatch:Dispatch<{type:string}|{type:string,payload:UserObject[]}>)=>{
   dispatch({type:LOGIN_REQUEST});
   axios.post(`https://monkeyapi-2-0.onrender.com/users`,newUser).
   then((response)=>{ dispatch({type:SIGNUP_SUCCESS,payload:response.data})}).catch(()=>{
    dispatch({type:LOGIN_FAILURE});

   });
}

export const ActionToDelete = (payload:any)=>{
   return {type:DELETE_ITEM,payload:payload}
}
export const ActionToAddItem = (payload:any)=>{
   return {type:ADD_ITEM,payload:payload}
}
// export const Login= (newUser:UserObject)=>(dispatch:Dispatch<{type:string}|{type:string,payload:UserObject[]}>)=>{
//    dispatch({type:LOGIN_REQUEST});
//    axios.post(`http://localhost:8080/users`,newUser).
//    then((response)=>{ dispatch({type:LOGIN_SUCCESS,payload:response.data})}).catch(()=>{
//     dispatch({type:LOGIN_FAILURE});

//    });
// }


export {}