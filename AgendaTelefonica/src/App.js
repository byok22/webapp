

import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import FormularioTelefonico from './components/FormularioTelefonico'
import personsService from './services/persons'
const App = () => {

 

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [personFilter,setPersonsFilter] =useState(persons)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


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

      personsService
      .create(Namebject)
      .then(returnedItem => {
        setPersons(persons.concat(returnedItem))
        setNewName('')
      })

     
    }
    
    
   
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
  const deletePerson = id => {
   console.log(id)
    
    personsService
      .deleted(id).then(item =>{
        console.log(item)
        setPersons( persons.filter(x=>x.id !== id) )
      }
      
        
      )
      .catch(error => {
        alert(
          `the person was already deleted from server`
        )
       
      })
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
            <li key={x.id}> {x.name} Tel {x.number}  <button onClick={() =>deletePerson(x.id)}>Eliminar</button></li>
          ):persons.map(x => 
            <li key={x.id}> {x.name} Tel {x.number}<button onClick={() =>deletePerson(x.id)}>Eliminar</button></li>
          )
          }
        </ul>
    </div>
  )
}

export default App