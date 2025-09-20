import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux' // to provide the store to the entire application
import { store } from './app/store' // importing the store we created

// we have to wrap the App component with Provider component from react-redux and pass the store as a prop to the Provider component
// this will provide the store to the entire application

// we will wrap the App component with Provider component here in main.jsx file, so that the entire application can access the store

// we can run the app now
// and inspect the redux store in browser using redux devtools extension, 
// we can see the state of the store and also we can dispatch actions to the store and see the changes in the state
// we can check the final actions and state in the redux devtools extension in browser
// as we can payload, in the action tab of the redux devtools extension in browser, hence we have used it in our addTodo function as action.payload 
// it helps in understanding the flow of data in redux
// it helps in debugging the application
// we have status bar which shows the actions and state of the store
// we have jump and skip buttons to go to the previous and next state of the store

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>,
)

// Summery 
// Redux is core library for state management
// React-Redux is used to connect Redux with React app
// Redux Toolkit is an abstraction over Redux to make it easier to use

// redux toolkit do the "never mutate the state" thing behind the scenes using immer library

// we have to create store using configureStore function from @reduxjs/toolkit and use it as single source of truth for our application
// we have one store for entire application

// we may have multipe reducers for different features of the application, which we can pass it to the configureStore function as an object
// e.g. reducer: { todo: todoReducer, user: userReducer }

// Store is used to get the data and also update the data only using reducer function

// hence we have to create reducer function using createSlice function from @reduxjs/toolkit
// we need three thing to create a slice
// 1. name of the slice
// 2. initial state of the slice
// 3. reducers (which is an object containing all the reducer functions), we can wirte the function in a different file and use it's reference here also 
  // we have access to state and action object in any reducer function
  // in state we have the previous state of the slice
  // in action we have type and payload, which we can use to update the state

// then we have to export the actions (addTodo, removeTodo) and reducer from the slice

// we can use the actions (addTodo, removeTodo) in our component 
// when we want to send we use dispatch function, and we will pass the isAction(addTodo) to the dispatch function 
// when we use to recieve/display data from the store we will use useSelector hook from react-redux, and we will pass the state to the useSelector hook, and it will return the data from the store

