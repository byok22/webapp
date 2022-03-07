import React, { useContext, useEffect,useState } from "react"
import { useNavigate} from "react-router-dom"
import UserContext from '../../context/UserContext'
const Login = () => {
    const {loginApi,state,logOut} = useContext(UserContext)
    const [ User, setUser ] = useState('')
    const [ Password, setPassword ] = useState('')
    const [ isLogged, setLogged ] = useState(false)

    const handleUserChange = (event) => {
      console.log(event.target.value)
      setUser(event.target.value)
    }
    const handlePasswordChange = (event) => {
      console.log(event.target.value)
      setPassword(event.target.value)
      
    }
   
    const navigate = useNavigate()
    const padding = {
      paddingRight: 5,
      "display": "inline"
    }
    const onSubmit = (event) => {
      event.preventDefault()
     
     
      const loginObjets={User:User,
      Password:Password}
      loginApi(loginObjets,setLogged)
     

     

    
     setTimeout(() => {   navigate('/') }, 2000);
     
    }
    const logout =()=>
    {
      setLogged(false)

      logOut()


      return{
        
      }
    }
  
    return (
      <>
     {!isLogged?
     <form style={padding} onSubmit={onSubmit}><input  placeholder={'User'} onChange={handleUserChange}/> <input type={"password"} placeholder={'Password'} onChange={handlePasswordChange}/> <button>Login</button></form>
     : 
     <div style={padding}>{User}<button  onClick={() =>logout()}>Cerrar Sesion</button></div>
     }
     
     
    
         
      </>
    
    )
  }

  export default Login