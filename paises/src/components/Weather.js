import React, { useState } from 'react'

const Weather=(props) => {
   
   const item= props.item
  console.log("EL Item del tiempo es ",item)
    let Direction = "Norte"
    switch(item.current.wind_dir)
    {
        case 'N':
            Direction="Norte"
            break
        case 'E':
            Direction="Este"
            break
        case 'W':
            Direction="Oeste"
            break
        case 'S':
            Direction="Sur"
            break
        default:
            Direction=item.current.wind_dir
    }
   

    return (<div>
       <h4>Weather in {item.location.name}</h4>
       <p><strong>Temperature:</strong> {item.current.temperature} Celcius </p>
       <img src={item.current.weather_icons} alt="Example2" width="50" height="50"></img>
       <p><strong>Wind:</strong>{item.current.wind_speed} km/h Direction {Direction} </p>

    </div>)
}

export default Weather