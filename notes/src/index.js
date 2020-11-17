import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Note from  './components/Note.js'
import axios from 'axios'




const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 

  const addNote = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)
    setNotes([...notes, { id: notes.length + 1, content: newNote, date: new Date().toString(), important: false }])
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(n => <Note note={n} />)}
      </ul>
    </div>
     <form onSubmit={addNote}>
     <input value={newNote} onChange={handleNoteChange} />
     <button type="submit">save</button>
   </form> 
   </div>
  )
}

axios.get('http://localhost:3001/notes')
  .then(result => ReactDOM.render(
    <App notes={result.data} />,
    document.getElementById('root')
  ))