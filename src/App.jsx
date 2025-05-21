"use client"
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)
  useEffect(() => {
    if(count >= 100 || count < 0){
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
    setCount(count / 2)
  }
  const multiply = () => {
    let tempCount = count * 2
    if(tempCount < 100 ){
      setCount(count * 2)
    }
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <h1>
        {count == 100 || count < 0? "You're done" : count}
      </h1>
      <p>
        {count == 100 || count < 0? "Sesi Increment dan decrement sudah habis" : "increment dibatasi dari 0 - 100"}
        
      </p>
      <button disabled={disabled} onClick={divide}>
        divided by 2
      </button>
      <button disabled={disabled} onClick={decrement}>
        decrease
      </button>
      <button disabled={!disabled} onClick={reset}>
        Reset!
      </button>
      <button disabled={disabled} onClick={increment}>
        increase
      </button>
      <button disabled={disabled} onClick={multiply}> 
        multiply by 2
      </button>
    </>
  )
}

export default App;
