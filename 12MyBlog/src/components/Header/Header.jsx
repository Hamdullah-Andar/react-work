import React from 'react'

// Crete a new component for LogoutBtn in Header folder and render it here conditionaly, show it if the suer is loggedin otherwise hide it
// we can use container component here too,

import { Container, Logo, LogoutBtn } from '../index'

// we need to import link for redirection 
// to forcefully navigate or programmatically navigate a user we use useNavigate as below
import { Link, useNavigate } from 'react-router-dom'

// we nedd useSelector to check whether the user is logged in or not, as we have access to the state in useSelector
import { useSelector } from 'react-redux'

// | Hook                | Library                | Purpose                           | Example Use Case                    |
// | ------------------- | ---------------------- | --------------------------------- | ----------------------------------- |
// | **`useNavigate`**   | react-router-dom v6    | Navigate programmatically         | Redirect after logout               |
// | **`useNavigation`** | react-router-dom v6.4+ | Track navigation/submission state | Show loading spinner on form submit |

// useNavigate → "Go somewhere"
// useNavigation → "What’s happening while going

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  // for creating navigation bar, an array gets created and loop through it, and we have objects in that array as below
  // if authStatus is active show navItem otherwise hide it

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      {/* we will put the navigation item/bar inside the container, we will put it in nav and logo, li inside it */}
      <Container>
        <nav className='flex'>
          
          {/* div for logo  */}
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>

          {/* ul for nav items, the key should be add to the html which gets repeated */}
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header