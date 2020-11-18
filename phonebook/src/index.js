// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Person from './component/Person'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    //   { name: 'Arto Hellas' , number: 8646354738},
    //   { name: 'Peter Pan' , number: 45678909876543 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const addName = (inputEvent) => {
    inputEvent.preventDefault()
    
    axios
    .post('http://localhost:3001/persons', { name: newName, number: newNumber, })
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
  }
return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addName}>
      <div>
        name: < input value={newName} onInput={inputEvent => setNewName(inputEvent.target.value)} />
          number: <input value={newNumber} onInput={inputEvent => setNewNumber(inputEvent.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <div>
      {persons.map(listItem => <Person name={listItem.name} number={listItem.number}></Person>)}
    </div>
  </div>
)
}
axios.get('http://localhost:3001/persons')
  .then(result => ReactDOM.render(
    <App persons={result.data} />,
    document.getElementById('root')
  ))
ReactDOM.render(
  <App />, document.getElementById('root')
)