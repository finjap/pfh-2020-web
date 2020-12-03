 //import React, { useState } from 'react'
import React, { useState as useTitel, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Studie from './component/Studie';
import './index.css';
import './component/Header';
import Header from './component/Header';

import axios from 'axios'

const App = () => {
  const [studien, setStudien] = useTitel([
   
  ])
  const [newStudienleiter, setNewStudienleiter] = useTitel('')
  const [newTitel, setNewTitel] = useTitel('')
  const [newStunden, setNewStunden] = useTitel('')
  const [newZeitraum, setNewZeitraum] = useTitel('') // im spaeteren Verlauf soll eine Kalenderauswahl erscheinen
  const [newKriterien, setNewKriterien] = useTitel('')
  const [newDetails, setNewDetails] = useTitel('')
 
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/studien').then(response => {
        console.log('promise fulfilled')
        setStudien(response.data)
      })
  }, [])
  const addStudie = (inputEvent) => {
    inputEvent.preventDefault()
    
    axios
    .post('http://localhost:3001/studien', { studienleiter: newStudienleiter, titel: newTitel, zeitraum: newZeitraum, stunden: newStunden, details: newDetails, kriterien: newKriterien })
    .then(response => {
      setStudien(studien.concat(response.data))
      setNewStudienleiter('')
      setNewDetails('')
      setNewKriterien('')
      setNewTitel('')
      setNewZeitraum('')
      setNewStunden('')
    })
  }
return (
  <div>
    <h2>Neue Studie erstellen</h2>
    <form onSubmit={addStudie}>
      <div >
      <div class="form_left">
        <p>Titel: < input class="input_titel" value={newTitel} onInput={inputEvent => setNewTitel(inputEvent.target.value)} /></p> 
        <p>Studienleiter: <input class="input_studienleiter" value={newStudienleiter} onInput={inputEvent => setNewStudienleiter(inputEvent.target.value)} /></p>
        <p>Zeitraum: <input class="input_zeitraum" value={newZeitraum} onInput={inputEvent => setNewZeitraum(inputEvent.target.value)} /></p>
        <p>Stunden: <input class="input_stunden" value={newStunden} onInput={inputEvent => setNewStunden(inputEvent.target.value)} /></p>
        <p>Kriterien: <input class="input_kriterien" value={newKriterien} onInput={inputEvent => setNewKriterien(inputEvent.target.value)} /></p>
        <div>
        <button class="btn_submit" type="submit">Speichern</button>
      </div>
        </div>
        <div class="form_right">
        Details: <input class="input_details" value={newDetails} onInput={inputEvent => setNewDetails(inputEvent.target.value)} />
      </div>
      </div>
    </form>
    <div>
    <div>
    <h2>Ausgeschreibene Studien</h2>
    </div>
    <a href="https://www.pfh.de/">
    <div class="link">
    {studien.map(listItem =>  <Studie  titel={listItem.titel} studienleiter={listItem.studienleiter} stunden={listItem.stunden}></Studie>)}
    </div>
    </a>
  </div>
  </div>
)
}
axios.get('http://localhost:3001/studien')
  .then(result => ReactDOM.render(
    <App studien={result.data} />,
    document.getElementById('root')
  ))
ReactDOM.render(
  <App />, document.getElementById('root')
)