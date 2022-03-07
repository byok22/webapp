import React, { useState } from 'react'

const Filter=(props) => {
   
   const filter= props.filter
  
 
   

    return (<div>
        Filtro: <input
         value={filter}
         onChange={(e)=>props.searchPerson(e.target.value)}
        />


    </div>)
}

export default Filter