import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    // Increment the counter only if it's less than infinity
    if (counter <= 100) {
      setCounter((prevCounter) => prevCounter + 1)
    }
  }

  const removeValue = () => {
    // Decrement the counter only if it's greater than or equal to 0
    if (counter >= 1) {
      setCounter((prevCounter) => prevCounter - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
