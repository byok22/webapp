import { AUTH,GET_USER } from "./types";

export default  (state,action) =>{ 
    const {payload,type}=action
    switch(type)
    {
        case GET_USER:
            return{
                ...state,
                selectedUser:payload

            }
        break
        case AUTH:
           
            return{
                ...state,
                auth:payload
            }
            break
        default:
            return state

    }

}