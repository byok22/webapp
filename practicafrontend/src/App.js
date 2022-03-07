import './App.css';
import Menu from './components/Menu'

import CFDIS from './components/CFDIS'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'
import Profiles from './components/User/Profiles';
import WeatherAPP from './components/WeatherAPP';
import UserState from './context/UserState';
import { useState } from 'react'
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
function App() {
  return (
    <div>
     <UserState>
     <Menu />
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/weatherapp" element={<WeatherAPP/>} />  
        <Route path="/cfdis" element={<CFDIS/>} />  
        <Route path="/profile" element={ <Profiles />} />  
        <Route path="/about" element={<About/>} />         
        
      </Routes>
      <Footer/>
     
     </UserState>
      
    </div>
  )
}

export default App
