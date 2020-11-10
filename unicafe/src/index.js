import React, { useState } from 'react'

import ReactDOM from 'react-dom'




const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <div>All: {props.good + props.neutral + props.bad}</div>

      <div>Average: {(props.good - props.bad)/(props.good + props.neutral + props.bad)}</div>

      <div>Positive: {(props.good / (props.good + props.neutral + props.bad)) * 100 } % </div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <div>Good: {good}</div>

      <div>Neutral: {neutral}</div>

      <div>Bad: {bad}</div>


      <button onClick={() => setGood(good + 1)}>   Good  </button>

      <button onClick={() => setNeutral(neutral + 1)}>  Neutral </button>

      <button onClick={() => setBad(bad + 1)}>  Bad </button>


      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))