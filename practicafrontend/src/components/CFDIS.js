
import React, { useContext, useEffect,useState } from "react"
import UserContext from './../context/UserContext'
import { Table } from 'react-bootstrap'
const CFDIS = () => {
  const {getResume} = useContext(UserContext)
  const [ Resume, setResume ] = useState({
    "filtered": {
        "SubTotal": 0.0,
        "Neto": 0.0,
        "TrasladosIVA": 0.0,
        "TrasladosIEPS": 0.0,
        "TrasladosISR": 0.0,
        "RetencionesIVA": 0.0,
        "RetencionesIEPS": 0.0,
        "RetencionesISR": 0.0,
        "count": 0.0,
        "ImpuestosRetenidos": 0.0
    },
    "excercise": {
        "SubTotal": 0.0,
        "Neto": 0.0,
        "TrasladosIVA": 0.0,
        "TrasladosIEPS": 0.0,
        "TrasladosISR": 0.0,
        "RetencionesIVA": 0.0,
        "RetencionesIEPS": 0.0,
        "RetencionesISR": 0.0,
        "count": 0.0,
        "ImpuestosRetenidos": 0.0
    }
})
useEffect(()=>{
 console.log(Resume)
 getResume(setResume)
 
 
 
  

},[])
  
return(
    <div> 
      <h5>Resumen de CFDIS Mes actual y Ejercicio</h5>

      <Table striped>
      <thead>
        <tr>
        <th></th>
          <th># Cfdis</th>
          <th>SubTotal</th>
          <th>Neto</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        
        <td><b>Mes Actual</b></td>
          <td>{Resume.filtered.count}</td>
          <td>${Resume.filtered.SubTotal}</td>
          <td>${Resume.filtered.Neto}</td>
        </tr>
        <tr>
        <td><b>Ejercicio</b></td>
        <td>{Resume.excercise.count}</td>
          <td>${Resume.excercise.SubTotal}</td>
          <td>${Resume.excercise.Neto}</td>
        </tr>
        </tbody>
      </Table>

    </div>
  )
}

  export default CFDIS