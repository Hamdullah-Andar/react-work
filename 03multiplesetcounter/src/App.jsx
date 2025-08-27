import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0) // we can give any initial value to the state variable, like 0, 10, -5, "", [], {} etc.

  const addValue = () => {
    if(counter >= 20){
      return 20
    }

    // setCounter(counter + 1) 
    // setCounter(counter + 1) 
    // setCounter(counter + 1) 
    // setCounter(counter + 1)
    // // what happens when we duplicate setCounter multiple time, 
    // // does it increment count that many time or just once 

    // // useState() send changes in baches, when it sees that the counter which update are the same
    // // it sees that the changes are the same, hence it get updates only once


    // to update it multiple we can do it as below
    // we get the prevCounter
    // we get a call back in setCounter, it is a hidden feature, where the call back accepts a parameter as prevCounter which holds previous value of counter
    setCounter(prevCounter => prevCounter + 1) 
    // setCounter(counter => counter + 1) // we can name prevCounter as just counter as well
    // but it creates inconsistency in code, and it can be missunderstood with counter in useState()
    // it is better approach to use prevCounter which identify the previous value of counter
    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1)
    // when the previous valuve comes through a call back, the second call of setCounter starts after completing the first one
    // now it is not a bunch of setCounter

    console.log("Clicked : ", counter)

  }

  const removeValue = () => {
    if(counter <= 0){
      return 0
    }
    setCounter(counter - 1)
    console.log("Clicked : ", counter)
  }

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value: {counter}</h2>


      <button
        onClick={addValue}
      >Add Value {counter}</button>

      <br />
      
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer : {counter}</p>

    </>
  )
}

export default App
