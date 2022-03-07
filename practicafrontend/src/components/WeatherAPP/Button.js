import React, { useState } from 'react'
import OneDetail from './OneDetail'

const Button=(props) => {
    
   const [showDetails,setShowDetails] =useState(false)
   const item= props.item
   const itemsFilter = []
   itemsFilter.concat(item)
console.log("El Item es igual a ",item)
  const setToState =(event)=>
  {
    console.log("Hubo Click")
    if(!showDetails)
    {
        setShowDetails(true)
    }else{
        setShowDetails(false)
    }
  }
 const Show="Show"
 const Hide="Hide"   



    return (<div>
        <p>{item.name} <button onClick={(e)=>setToState(e)}>
            {showDetails==false?Show:
             Hide}
        </button> </p> 
        {showDetails==true?<OneDetail itemsFilter={item}/>:
             <div></div>}
   
    </div>)
}

export default Button
/*
 <button onClick={(e)=>setToState(e)}>
            {showDetails==false?Show:
             Hide}
        </button>
       

*/