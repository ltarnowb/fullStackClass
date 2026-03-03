//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = '10'

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name='Dawn' age={32}/>
      <Hello name='George' age={69+420}/>
      <Hello name='Sharon' age={38}/>
    </div>
  )
}


export default App
