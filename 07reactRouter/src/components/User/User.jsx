import React from 'react'

// To Access the userId from the url we have use the useParams method from react-router-dom
// we have to import userParams from react-router-dom first as below
import { useParams } from 'react-router-dom'

const User = () => {
    // After importing the useParam method from react-router-dom, we can use it as below to access the userId, 
    // and display it in the div of return  
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: { userId }</div>
  )
}

export default User

// note from AI about Route Parameter 

// 📌 Route Parameters
// What: Dynamic values in the URL.
// How: Defined with a : in the route (e.g. :userId).
// Purpose: Lets routes handle multiple values without creating separate paths.
// Access: Retrieved in a component using useParams().
// Example: /user/42 → userId = "42".