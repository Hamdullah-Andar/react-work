import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // his useEffect has nothing with context
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    // as we are in client side we can use querySelector and remove all the classes, and add it our own class

    document.querySelector('html').classList.add(themeMode)
    // we are adding themeMode, as themeMode, which is set by method

    // we have to pass themeMode in dependency, whihc will run again when there was any change in themeMode value

  }, [themeMode])
  
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* Theme Button */}
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {/* Card */}
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App

// As we have used the ThemeProvider as above <ThemeProvidre></ThemeProvider>, but we have not pass any values to it
// Hence we have to pass value to ThemeProvider

// we can pass value={{themeMode, lightMode, darkMode}} to ThemeProvider 
// hence Theme Button and Card will have access to it vlaue provided in themeProvider like value={{themeMode, lightMode, darkMode}}

// and we have to define the themeMode value using useState(), and put light as it's default value 
// Aw we have lightMode and darkMode methods access here, but we don't know any functionality defined for them in createContext
// difining functionality for lightMode and darkMode with thier exact name method, will directly sent defined functionality to createContext as defined above

// We could define darMode and lightMode in a single method as well using true false
// but we write it's method separately

// but we have to inject these method to html

// acutl change in theme should be done using javascript as in useEffect above 

// We have to create components and add Card and ThemeBtn components in it
// And use useTheme custom hook in ThemeBtn