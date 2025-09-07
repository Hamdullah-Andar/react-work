import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div>Welcome : {user.username}</div>
}

export default Profile

// Here we will check how we recieve/Access data from Context
    // We have to import useContext
    // We have to import UserContext
    // We may have many contexts, hence we have to pass the context name (UserContext) we want to get access to it's data
    // We have to destructure the user from UserContext using UseContext() as const {user} = useContext(UserContext)


// We have conditionally return the profile componet as below which is used above too
    // if(!user) return <div>Please Login</div>
    // return <div>Welcome : {user.username}</div>


// Now we to import Profile and Login component in the App
