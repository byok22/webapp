import React, {useReducer,useState,useEffect} from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'
import moment from 'moment';

const url ='https://hzmrt5ds30.execute-api.us-east-1.amazonaws.com/api'



const UserState =(props) =>{
    const initialState ={
        users:[],
        selectedUser:null,
        auth:{},
        url :'https://hzmrt5ds30.execute-api.us-east-1.amazonaws.com/api',
        userLogin:''    

    
    }

    const [state,dispatch] =useReducer(UserReducer,initialState)

  

    const loginApi = (props,setLogged) =>{

            console.log("loginAPi",props)
            const ObjectLogin=
                {
                    "params": {
                        "USERNAME":props.User,
                        "PASSWORD": props.Password
                    },
                    "flow": "USER_PASSWORD_AUTH"
                }
            axios
              .post(url+'/User/auth',ObjectLogin)
              .then(response => {
                 
                dispatch({
                    type:'AUTH',
                    payload:response.data
                })
               setLogged(true)
                
              })
          }

    

    

    const createUSer=()=>{}
    const logOut=()=>{

        state=initialState
    }
    const getUsers= async (setUser)=>{

        console.log("Entro a GetUSer")
        let config ={
            headers: {
                "access_token":state.auth.AccessToken ,
                "Content-Type":"application/json",
             
             
    
        }
       }
       await  axios
          .get(url+'/User',config)
          .then(response => {
             dispatch({
                 type:'GET_USER',
                 payload:response.data
             })
          
          setUser(response.data)
            
          })
      }
    const getResume= async (setResume)=>{
          console.log("Hola")
        let date = new Date();
        let firstDay =moment().toISOString( new Date(date.getFullYear(), date.getMonth(), 1))
        let lastDay = moment().toISOString(new Date(date.getFullYear(), date.getMonth() + 1, 0))
        const payload=
        {
            "domain": [
                [
                    "company_id",
                    "=",
                    "199"
                ],
                [
                    "FechaFiltro",
                    ">=",
                    firstDay.replace('Z','')
                ],
                [
                    "FechaFiltro",
                    "<=",
                    lastDay.replace('Z','')
                ]
            ],
            "fuzzy_search": null
        }
      console.log( JSON.stringify(payload) )
        let config ={
            headers: {
                "access_token":state.auth.AccessToken ,
                "Content-Type":"application/json",
             
             
    
        }
       }
       await  axios
          .post(url+'/CFDI/resume',payload,config)
          .then(response => {
           
          console.log(response.data)
          setResume(response.data)
            
          })
      }
    

    return(
        <>
        <UserContext.Provider value={
            {
                user:state.users,
                selectedUser:state.selectedUser,
                auth:state.auth,
                loginApi,
                createUSer,
                getUsers,
                getResume
            }
        }>
            {
                props.children
            }

        </UserContext.Provider>
        </>
    )
}
export default UserState

