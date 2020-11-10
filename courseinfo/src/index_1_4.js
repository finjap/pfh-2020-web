import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.course} </h1>
        </div>
    )
}
const Content = (props) => {
    console.log(props)
    return(
        <div>
                <Part part={props.parts[0]}></Part>
                <Part part={props.parts[1]}></Part>
                <Part part={props.parts[2]}></Part>
        </div>
    )
}
const Part = (props) => {
    return(
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}
const Total = (props) => {
    console.log(props)
    return(
        <div>
            <p>
            Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    // parts[1].name
    const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]


    return (
        <div>
            <Header
                course={course}>
            </Header>
            <Content
                parts={parts}>
            </Content>
            <Total
                // exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}
                parts={parts}>
            </Total>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))