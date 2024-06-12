import { DECREASE, INCREASE } from "../actionType"

const init = {
    counter:0
}

 export const reducer = (state=init,{type,payload})=>{

     switch (type) {
        case INCREASE: return {...state,counter:state.counter+3}
        case DECREASE:return {...state,counter:state.counter-1}

        default: return{ ...state}
            
     }
}