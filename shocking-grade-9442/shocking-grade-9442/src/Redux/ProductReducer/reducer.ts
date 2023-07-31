import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

interface State {
    products: any[]; // Change 'any[]' to the actual data type you expect from the API
    error: string | null;
    isLoading:boolean;
    isError:boolean;
    totalPages:number;
  }

const initalState:State={
    products:[],
    isLoading:false,
    isError:false,
    error:"",
    totalPages:0
}
export const reducer=(state=initalState,action: any)=>{
    switch(action.type){
        case PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true,error:action.payload}
        case GET_PRODUCT_SUCCESS:

            return {...state,isLoading:false,products:action.payload.product,
                totalPages: action.payload. totalPages ,isError:false
            
            }

            default:
                return state;
    }
}