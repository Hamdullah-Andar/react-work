import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 30

  let [counter, setCounter] = useState(0) // we can give any initial value to the state variable, like 0, 10, -5, "", [], {} etc.
  // it is convention to name the state variable and the function to update it in this way only
  // useState is responsible for changing the state, the changes are propagated to the UI automatically by React in DOM

  // we don't need to import React from 'react' in latest versions of React
  // because React 17+ has a new JSX Transform that doesn't require React to be in scope
  // the conversion of JSX to JS is handled automatically by the new transform which is called by the build tools like Vite, Webpack, etc.
  // babel converts JSX to JS using the new JSX Transform
  // hence we don't need to import React from 'react' in latest versions of React

  // React updates the UI using hooks, which are special functions
  // useState is a hook which helps in updating the UI when the state/variable is updated
  // useState returns an array of two values, first is the current state/variable value, second is a function to update the state/variable value
  // we can use array destructuring to get the two values from the array returned by useState
  // we can name the two values anything we want, but it is a convention to name the first value as the state/variable name and the second value as setState/variable name
  // we can use the setState/variable function to update the state/variable value, and React will automatically update the UI

  const addValue = () => {
    if(counter >= 20){
      return 20
    }
    counter = counter + 1

    setCounter(counter) // this is the correct way to update the state/variable value using the function returned by useState
    console.log("Clicked : ", counter)
    
    // The counter value gets console logged correctly, but the UI does not update.
    // There is a problem in UI not updating
    // React controls the UI when and what to update using state
    // hence the react name is React, which react on updating the UI updating a state/variable
    // hence we have not used state here the UI is not updating
    // we have used it above later

  }

  const removeValue = () => {
    if(counter <= 0){
      return 0
    }
    counter = counter - 1
    setCounter(counter)
    console.log("Clicked : ", counter)
  }

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      {/* Button Props in React
      React buttons are just <button> elements under the hood, so they support all HTML button attributes + React-specific event props.

      Common Props:

      onClick → Function that runs when clicked.
      type → "button" | "submit" | "reset"
        Default is "submit" if inside a form.
      disabled → Boolean, disables the button.
      className → CSS class for styling.
      style → Inline styles object (style={{ color: "red" }}).
      id, name, value → Useful for forms.
      children → Anything between <button>...</button> (text, icons, etc.). */}


      {/* Use onClick (camelCase, not onclick).
      Pass a function reference, not the result of a function. (i.e., onClick={handleClick}, not onClick={handleClick()}).
      If you need to pass arguments: 
      <button onClick={() => handleClick("Hello")}>Click Me</button> */}

      <button
        onClick={addValue}
      >Add Value {counter}</button>

      <br />
      
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer : {counter}</p>

      {/* if we were to update the counter using vinilla js, we should have used below code for updating in all palce separately
      document.getElementById("counter").innerText = counter */}
    </>
  )
}

export default App
