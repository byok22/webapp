
import React, { useState } from 'react'
import Filter from './components/Filter'
import FormularioTelefonico from './components/FormularioTelefonico'
import axios from 'axios'
const App = (props) => {

  axios.get('http://localhost:3001/posts').then(response => {
    const notes = response.data
    console.log("NoHolates",notes)
  })

  const [ persons, setPersons ] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [personFilter,setPersonsFilter] =useState(persons)
  const addPerson = (event) => {
   
    event.preventDefault()
    const Namebject = {
      id: persons.length + 1,
      name: newName,
      number:newNumber
    }
    console.log("Entro a add erson",newName,newNumber,Namebject,persons)
    console.log(persons.find(x=>x.name==newName))
    let exist = persons.find(x=>x.name==newName)?true:false
    console.log(exist)
    if(exist)
    {
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(Namebject))
    }
    
    
    setNewName('')
    setFilter('')
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const searchPerson = (search) => {
    setFilter(search)
    if(search!='')
    {
     
      const filteredData = persons.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
        })

      console.log(filteredData)
      console.log(filter)
      setPersonsFilter(filteredData)
    }else{
      setPersonsFilter(persons)
    }
    
    
  }
  
  return (
   
    <div>
     
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <div>debug: {filter}</div>
      <Filter filter={filter} searchPerson={searchPerson} />
      <h2>Phonebook</h2>
     <FormularioTelefonico addPerson={addPerson} newName={newName} handlePersonChange ={handlePersonChange} newNumber ={newNumber} handleNumberChange ={handleNumberChange} />
      <h2>Numbers</h2>
      <ul>
      {filter!=''?personFilter.map(x => 
            <li key={x.id}> {x.name} Tel {x.number}</li>
          ):persons.map(x => 
            <li key={x.id}> {x.name} Tel {x.number}</li>
          )
          }
        </ul>
    </div>
  )
}

export default App