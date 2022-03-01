
import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import './index.css';


/*const App = () => {
  // const-definitions
  const t = [1, 2, 3] 

const m1 = t.map(value => value * 2) 
console.log(m1) // [2, 4, 6] es impreso
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  



  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <p>
        {m2}
      </p>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}
const Header =   (props) =>{
  return (
    <div>
       <h1>{props.course}</h1>
    </div>
  )
}
const Content =   (props) =>{
  

  return (
    <div>
      <Part part={props.part1}  />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}
const Total =   (props) =>{
  return (
    <div>
       <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const Part =   (props) =>{
  console.log(props)
  return (
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>

    </div>
  )
}*//*
const App = () => {
  // const-definitions


  const course = 'Half Stack application development'
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
  const [uno, dos, tres] = parts
  return (
    <div>
    
      <Header course={course} />
      <Content parts={parts}  />
      <Total exercises={uno.exercises+dos.exercises+tres.exercises}/>
    </div>
  )
}
const Header =   (props) =>{
  return (
    <div>
       <h1>{props.course}</h1>
    </div>
  )
}
const Content =   (props) =>{
  console.log(props)
  const [uno, dos, tres] = props.parts

  return (
    <div>
      <Part part={uno}  />
      <Part part={dos} />
      <Part part={tres} />
    </div>
  )
}
const Total =   (props) =>{
  return (
    <div>
       <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const Part =   (props) =>{
  
  return (
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>

    </div>
  )
}*/
/*const App = () => {
  // const-definitions


  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
    
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total exercises={course.parts}/>
    </div>
  )
}
const Header =   (props) =>{
  return (
    <div>
       <h1>{props.course}</h1>
    </div>
  )
}
const Content =   (props) =>{
  console.log(props)
  const [uno, dos, tres] = props.parts

  return (
    <div>
      <Part part={uno}  />
      <Part part={dos} />
      <Part part={tres} />
    </div>
  )
}
const Total =   (props) =>{
  console.log(props)
  const [uno1, dos1, tres1] = props.exercises
  return (
    <div>
       <p>Number of exercises {uno1.exercises+dos1.exercises+tres1.exercises}</p>
    </div>
  )
}

const Part =   (props) =>{
  
  return (
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>

    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))*/

/*const Hello = (props) => {
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))*/



/*const App = () => {
  const [ counter, setCounter ] = useState(1)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  console.log('rendering...', counter)
  return (
    <div>{counter}</div>
  )
}*/
/*const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}*/
/*const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}*/
/*const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })


  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}*/
/*const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)*/


/*const Display = (props) =>{
  
  if(props.counter>=0)
  {return (
    <div>
    <p>{props.text}
    {props.counter}</p>
    </div>)
  }
  return (
    <div>
    <p>Positive 
    0</p>
    </div>)
  
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statics =({good,neutral,bad})=>
{
  console.log(good,bad,neutral)
  if(good!=0||bad!=0||neutral!=0)
  return(
    <div>
      <h1>statics</h1>
      <Display counter={good} text="Good "  />
      <Display counter={neutral} text="Neutral "  />
      <Display counter={bad} text="Bad "  />
      <Display counter={good+neutral+bad} text="All"/>
      <Display counter={good+neutral+bad} text="All"/>
      <Display counter={(good/(good+neutral+bad))*100} text="Positive "/>
    </div>
  
  )
  return(
    <div>
      No feedback Given
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToBadValue = newValue => {
    setBad(newValue+1)
  }
  const setToNeutral = newValue => {
    setNeutral(newValue+1)
  }
  const setToGoodValue = newValue => {
    setGood(newValue+1)
  }
    
  return (
    <div>
     <h1>Give feedback</h1>
      <Button handleClick={() => setToGoodValue(good)} text="good" />
      <Button handleClick={() => setToNeutral(neutral)} text="neutral" />
      <Button handleClick={() => setToBadValue(bad)} text="bad" />
      <Statics  good={good} neutral={neutral} bad={bad} />  

    </div>
  )
}*/
/*const Display = props => {

console.log(props)
return(
<div>{props.anecdote}</div>)
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    Next anecdote
  </button>
)
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const setToSelected =(selected) =>{
    console.log(selected)
    let length = anecdotes.length;
    var min=0;
    var max=length-1; 
    selected =
    Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    
    setSelected(selected)
  }
  return (
    <div>
      <Button handleClick={() => setToSelected(selected)} />
     <Display anecdote={props.anecdotes[selected]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/
import App from './App'
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]


ReactDOM.render(<App notes={notes} />, 
  document.getElementById('root')
)