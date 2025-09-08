import { createContext, useContext } from "react";

// previously we have not pass any value to createContext, but we can some value, we will do it in below example
// It another different syntax of context

export const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

// We could use single function instead darkTheme: () => {}, lightTheme: () => {},
// But here we will use both of them

// When the ThemeContext is called we will have access to themeMode and also to darkTheme, lightTheme methods

// As in miniContext project we have use <UserContext.Provider value={{user, setUser}}>, where value is actullay passing variable and methods
// hence we can pass similarly inside the createContext too
// We can not just pass useState() value, but we can pass normal method too instead of setters of useState()

export const ThemeProvider = ThemeContext.Provider;

// We can export the provider, inside our createContext as above
// we can export from a separate or the same file where we created createContext as here, both are valid syntaxes

// In miniContext we have use a separate file for provider and used it inside App.js, And we pass the childern and values inside the provider

export default function useTheme() {
  return useContext(ThemeContext);
}

// we can create a custom hook by the name of useTheme (as hooks are function, so it is also a function) here as above too, which is a common practice between developers
// useTheme return useContext, and we pass ThemeContext to it

// As we have created context and it's provider here, we don't need to import two file where we want to use the context

// Now we will use ThemeProvider inside App.js,
// We will wrap everything in App.js return section with <ThemeProvider></ThemeProvider>
// We can use or wrap everything with <ThemeProvider></ThemeProvider> in render method in main.js also, both are valid ways of wrapping
