"use client"
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)
  useEffect(() => {
    if(count >= 1000 || count < 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
    
   
  }, [count])
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const divide = () =>  {
    setCount(count / 10)
  }
  const multiply = () => {
    let tempCount = count * 10
    if(tempCount > 100 ){
      setDisabled(true)
    }else{
      setCount(tempCount)
    }
  }
  const reset = () => {
    setCount(0)
    setDisabled(false)
  }
  return (
    <>
      <h1>
        {disabled? "You're done" : count}
      </h1>
      <p>
        {disabled? "Sesi Increment dan decrement sudah habis" : "increment dibatasi dari 0 - 1000"}
        
      </p>
      <button disabled={disabled} onClick={divide}>
        divided by 10
      </button>
      <button disabled={disabled} onClick={decrement}>
        decrease
      </button>
      <button onClick={reset}>
        Reset!
      </button>
      <button disabled={disabled} onClick={increment}>
        increase
      </button>
      <button disabled={disabled} onClick={multiply}> 
        multiply by 10
      </button>
    </>
  )
}

export default App;
