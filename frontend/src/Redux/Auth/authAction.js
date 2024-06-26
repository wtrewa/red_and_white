import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, CART_PRODUCT_FAILURE, PATCH_CART_PRODUCT_SUCCESS, POST_AUTH_SUCCESS } from "../actionType"
import {getLocalStorageValue, setLocalStorageValue} from "../../localStorage"

   
export const loginAction = (obj) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    const response = await axios.post(`http://localhost:8080/api/login`, obj);
    console.log(response);
    console.log(response.data.token);
    setLocalStorageValue('token', response.data.token);
    dispatch({ type: POST_AUTH_SUCCESS, payload: response.data.data });
    return response; // Return the response to ensure the promise resolves
  } catch (error) {
    dispatch({ type: AUTH_FAILURE });
    return error // Return the error to ensure the promise rejects
  }
};

 export const cartUpdate = (id,obj)=>async(dispatch)=>{
  try {
   const   token =  getLocalStorageValue('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} ` 
    };
    dispatch({type:CART_PRODUCT_FAILURE})
    console.log(id)
    const data = await axios.patch(`http://localhost:8080/api/user/${id}`,obj,{headers},{new:true});
     dispatch({type:PATCH_CART_PRODUCT_SUCCESS,payload:obj})
    console.log(data)
    return data
  } catch (error) {
    dispatch({type:CART_PRODUCT_FAILURE})
  }
 

 }


 export const singupAction =  (obj)=>async(dispatch)=>{
  try {
    console.log("obj==>",obj)
  const res = await axios.post(`http://localhost:8080/api/signup`,obj)
   console.log("res==>",res)
  } catch (error) {
    console.log(error)
  }
 }

 