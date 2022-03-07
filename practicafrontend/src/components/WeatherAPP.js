import React from "react"

import { useState, useEffect } from 'react'
import axios from 'axios'
import Paises from './WeatherAPP/Paises'
import Filter from './WeatherAPP/Filter';
import Details from  './WeatherAPP/Details';
import Button from './WeatherAPP/Button';

const WeatherAPP = () => {
  const [ Countries, setCountries ] = useState([]) 
  const [ filter, setFilter ] = useState('')
  const [itemsFilter,setItemsFilter] =useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(Countries.concat(response.data))
        console.log(Countries)
        
      })
  }, [])


  const search = (search) => {
    setFilter(search)
    if(search!='')
    {
     
      const filteredData = Countries.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
        })

      console.log(filteredData)
      console.log(filter)
      setItemsFilter(filteredData)
    }else{
      setItemsFilter([])
    }
    
    
  }

  return (
    <div >
     
      <Filter filter={filter} search={search} />

      {
        itemsFilter.length>1&&itemsFilter.length<=10?
          itemsFilter.map
          (
            (x,index) =>
              <Button key={index} item={x} />
          )
          :itemsFilter.length==1?
            <Details itemsFilter={itemsFilter}/>
            :[]
      }
    </div>
  )
  }

  export default WeatherAPP