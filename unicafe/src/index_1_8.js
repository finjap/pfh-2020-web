import React, { useState } from 'react'

import ReactDOM from 'react-dom'


//<div>All: {(good + neutral +  bad )}</div>

//<div>Average: {(good - bad )}</div>

//<div>Positive: {((good/all)*100)}</div>


// a proper place to define a component
const Statistics = (props) => {
 return(
   <div>
      All: {props.all}
   </div>
 )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  return (
    <div>
        <div>Good: {good}</div>

        <div>Neutral: {neutral}</div>

        <div>Bad: {bad}</div>


      <button  onClick={() => setGood(good + 1)}>   Good  </button>

      <button  onClick={() => setNeutral(neutral + 1)}>  Neutral </button>

      <button  onClick={() => setBad(bad + 1)}>  Bad </button>

      <h2>Statistics</h2>
      <Statistics>
        

      </Statistics>
    </div>
  )
}




/* return (

<div>

<div>Good: {good}</div>

<div>Neutral: {neutral}</div>

<div>Bad: {bad}</div>

<div>All: {(good + neutral +  bad )}</div>

<div>Average: {(good - bad )}</div>

<div>Positive: {((good/all)*100)}</div>

<button  onClick={() => setGood(good + 1)}>   Good  </button>

<button  onClick={() => setNeutral(neutral + 1)}>  Neutral </button>

<button  onClick={() => setBad(bad + 1)}>  Bad </button>

</div>

)

} */



ReactDOM.render(<App />,

document.getElementById('root')

)

ReactDOM.render(<App/>, document.getElementById('root'))