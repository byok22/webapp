import { useState, useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'
const OneDetail=(props) => {
    const x=props.itemsFilter
    const [item,setItem] =useState({
        "request": {
            "type": "City",
            "query": "Guadalajara, Mexico",
            "language": "en",
            "unit": "m"
        },
        "location": {
            "name": "Guadalajara",
            "country": "Mexico",
            "region": "Jalisco",
            "lat": "20.667",
            "lon": "-103.392",
            "timezone_id": "America/Mexico_City",
            "localtime": "2022-03-04 19:04",
            "localtime_epoch": 1646420640,
            "utc_offset": "-6.0"
        },
        "current": {
            "observation_time": "01:04 AM",
            "temperature": 29,
            "weather_code": 116,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Partly cloudy"
            ],
            "wind_speed": 6,
            "wind_degree": 190,
            "wind_dir": "S",
            "pressure": 1019,
            "precip": 0,
            "humidity": 11,
            "cloudcover": 50,
            "feelslike": 27,
            "uv_index": 7,
            "visibility": 13,
            "is_day": "no"
        }
    })
/*const item={
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-07 08:14",
        "localtime_epoch": 1567844040,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "12:14 PM",
        "temperature": 13,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 100,
        "wind_degree": 349,
        "wind_dir": "S",
        "pressure": 1010,
        "precip": 0,
        "humidity": 90,
        "cloudcover": 0,
        "feelslike": 13,
        "uv_index": 4,
        "visibility": 16
    }
}*/
    
//const api_key = process.env.REACT_APP_API_KEY
const api_key = '8befcd17f93e6acce183de92491e724a'
const url = 'http://api.weatherstack.com/current?access_key='+api_key+'&query='+x.capital+'&units=m'
useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setItem(response.data)
        console.log(item)
        
      })
  }, [])




    return (<div>


         <h3>{x.name}</h3> <p>Capital: {x.capital}</p> 
          <p>Population: {x.population}</p>
          <h4>Languages</h4>
            <ul>{
              x.languages.map((y,i)=><li key={i}>{y.name}</li>)}
            </ul>
            {console.log(x.flag)}
            <h6>Flag</h6>
            <img src={x.flag} alt="Example2" width="96" height="65"></img>
          <Weather item={item}/>

    </div>)
}

export default OneDetail