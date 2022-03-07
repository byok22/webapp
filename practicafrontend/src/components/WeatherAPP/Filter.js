import React, { useState } from 'react'

const Filter=(props) => {
   
   const filter= props.filter
  
 
   

    return (<div>
        Filtro: <input
         value={filter}
         onChange={(e)=>props.search(e.target.value)}
        />


    </div>)
}

export default Filter