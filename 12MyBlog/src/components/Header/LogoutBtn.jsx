// As some action will take place, something will dispatch, so we need dispatch, authServicr for logout and logout

import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    // we will need logoutHander as below to logout the user
    // As logout in AuthService form appwrite return a promise we can use .then as below
    // most of the thing in appwrite return a promise
    // dispatch the logout to update the store state 
    // we can use return in .then section if we want to pass the value to another .then otherwise we don't need to use return in .then section
    // and we will conditionaly render the logout button in header component 
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((error) => console.error("Logout Failed: ", error))
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn