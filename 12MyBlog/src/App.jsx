import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  // we should have loading, so that we could do conditional rendering base on it 
  // initial value for loading should be true, as we want to use useEffect, 
  // and as the aplication gets mount, loading status should be true, as useEffect do something, inside useEffect we will set loading to false
  const [loading, setLoading] = useState(true)

  // as we are changing the state, we need dispatch 
  // as we know dispatch is used to merge/combine/connect redux with react
  const dispatch = useDispatch();

  // we need to use below useEffect to check the user is logedin or not 
  // which we can get from calling the getCurrentUser from authService
  // finally below run all the time if we get a response or not 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
