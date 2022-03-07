import React, { useContext, useEffect,useState } from "react"
import { useNavigate} from "react-router-dom"
import UserContext from '../../context/UserContext'
import './../../App.css'
import { Table, Form, Button } from 'react-bootstrap'
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
      paddingRight: 10,
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
     <Form style={padding} onSubmit={onSubmit}> <Form.Group style={padding}><input className="css-input"  placeholder={'User'} onChange={handleUserChange}/> <input className="css-input" type={"password"} placeholder={'Password'} onChange={handlePasswordChange}/> <button className="myButton" variant="primary" type="submit">Login</button></Form.Group></Form >
     : 
     <div className="myText" style={padding}>{User}<button className="myButton2"  onClick={() =>logout()}>Cerrar Sesion</button></div>
     }
     
     
    
         
      </>
    
    )
  }

  export default Login