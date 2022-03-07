

import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch
} from "react-router-dom"
import Login from "./User/Login"

const Menu = () => {
    const padding = {
      paddingRight: 5,
     
    }
   
    return (
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link  style={padding} to="/weatherapp">Aplicacion del Clima</Link>
        <Link  style={padding} to="/cfdis">Resumen CFDIS</Link>
        <Link  style={padding} to="/profile">Perfil</Link>
        <Link  style={padding} to="/about">About</Link>
        <Login></Login>
      
      
      </div>
    )
  }

  export default Menu