import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const {setUser} =useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        {" "}
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

// Here we will check how we send data to Context
    // We have to use useState() and useContext() hooks for sending data
    // The documentation start details from useContext() in the website
    // We have to import our UserContext too

    // we will create the UI, with two inputs and a button
    // Add handleSubmit event to the button
    // We have to use the useState to control the value of username and password fields
    // The username value should be governed from username useState()
    // The password value should be governed from password useState()
    // Add handleSubmit on Submit button

// We have to use useContext to set the value 
    // As we have UserContext and we have passed user and setUser in it 
    // We have to destructure the setUser from UserContext using UseContext() as const {setUser} =useContext(UserContext)
    // using setUser in handleSubmit we can send data as setUser({username, password})


