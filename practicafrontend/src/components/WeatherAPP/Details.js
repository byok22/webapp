import React, { useState } from 'react'

const Details=(props) => {
    const itemsFilter=props.itemsFilter



    return (<div><ul>{

itemsFilter.map((x,index) => 
          <li key={index}> <h3>{x.name}</h3> <p>Capital: {x.capital}</p> 
          <p>Population: {x.population}</p>
          <h4>Languages</h4>
            <ul>{
              x.languages.map((y,i)=><li key={i}>{y.name}</li>)}
            </ul>
            {console.log(x.flag)}
            <h6>Flag</h6>
            <img src={x.flag} alt="Example2" width="96" height="65"></img>
          
          
          </li>
        )
        
        }

    </ul>
      
    </div>)
}

export default Details