// src/store/reducers.ts


import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, USER_REQ, GET_USER_SUCCESS, SINGLE_USER_REQ, SINGLE_USER_SUCCESS,DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE, GET_TOTAL_PAGE, POST_PRODUCT_SUCCESS } from './actionType';



export interface Product {
  id: number;
  name: string;
  // Add other properties if available from the API response
}

 export interface DataState  {
  data: Product[]; // Change 'any[]' to the actual data type you expect from the API
  error: string | null;
  user:any[];
  isloading:boolean,
  singleuserLoad:boolean,
 
  singleUser:any,
  totalP:any[]
}

  const initialState: DataState = {
  data: [],
  error: null,
  user:[],  //userdata 
  isloading:false, //userdata loading
  singleuserLoad:false,
  singleUser:"",
  totalP:[]
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };

      case DELETE_DATA_SUCCESS:
      
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
        error: null,
      };
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };


    case USER_REQ:{
      return {
        ...state,
        isloading:true
      }
    }

    case GET_USER_SUCCESS:{
      return {
        ...state,
       user:action.payload
      }
    }

    case SINGLE_USER_REQ:{
      return {
        ...state,
        singleuserLoad:true
      }
    }

    case SINGLE_USER_SUCCESS:{
      return {
        ...state,
        singleuserLoad:false,
        singleUser:action.payload
      }
    }

    case GET_TOTAL_PAGE:{
      return {
        ...state,
        totalP:action.payload
      }
    }


    case POST_PRODUCT_SUCCESS:{
      return {
        ...state
      
      }
    }


    default:
      return state;
  }
};

export default dataReducer;
