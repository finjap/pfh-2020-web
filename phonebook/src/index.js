import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Person from './component/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (submitEvent) => {
       submitEvent.preventDefault()
    setPersons([
      ...persons,
      {name: newName}
    ])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: < input value={newName} onInput={inputEvent => setNewName(inputEvent.target.value) }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
         {persons.map(listItem => <Person name={listItem.name}></Person>)}
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
