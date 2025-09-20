import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  // as we need to use wraper/provider in Context API, here also we need to wrap the App component with Provider component from react-redux and pass the store as a prop to the Provider component
  // this will provide the store to the entire application
  // or we may do this in the main.jsx file, as we need to wrap the entire application with Provider component
  // we will wrap the App component in main.jsx file

  // we will use AddTodo and Todos components in the App component
  // AddTodo component will be used to add a todo item to the store
  // Todos component will be used to display the todo items from the store

  return (
    <>
      <h1>redux toolkit in React</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App



      // {/* we have redux which is the independent state management library of redux 
      // we have react-toolkit which is the improved version of redux 
      // we have react-redux which is specially used in react project 
      // if we want to use redux in our react projects, we need to have redux and react-redux both */}

      // {/* context API come very late, much development was done for the props drilling problem  */}
      
      // {/* at the very begining the archatecture was designed by facebook called flux
      // flux issue was state management, and centerl store to get data from there
      // the good thing about flux was data flow, we data should go the store, and get it back from the 
      // store in a structure way */}

      // {/* inspired from flux in 2015, 
      // there was a conference Dan Abrmaw and andrew clark/clorks 
      // they inroduce redux for the first time, which was a better version of flux 
      // some term was introduce there as below
      //   Single Source of truth (data shoud come from a single store)
      //   state should be read only (you should never modify/mutate your state)
      //   all the change in store should be done through function no direct change in store (changes should be done through reducer, change should be done through the function in store, not other functions) */}

        
      // {/* Redux is an Independent library, and react is independent
      // redux works with vue, react and JavaScript framework
      // hence we can find below line in redex doc page
      // A predictable State Container for JS Apps */}

      // {/* there was some issue in redux, which needs more set up before using it 
      // redux thunk, some middleware, chrome extension was used to use redux  */}

      // {/* redux-toolkit is battries included (less setup, most of things manage internally as more abstuction, easy store creation, built in middlware, slicing is added, how to use reducer, redux thunk is included) */}

      // {/* Store is a single source of truth, from where we get the data and also update the data
      // we can have multiple stores, but it is not a good practice, hence we should have single store */}

      // {/* Reducer is used to update the store, it is a pure function which takes the previous state and action as argument and return the new state */}

      // {/* useSelector is used to get the data from the store, it is a hook which takes the state as argument and return the data */}

      // {/* useDispatch is used to update the data in the store, it is a hook which return the dispatch function, which is used to dispatch the action to the reducer */}
    
      // {/* Store and Reducer are the core of redux, without them we cannot use redux, they are independent of react-redux */}

      // {/* where useSelector and useDispatch are the hooks provided by react-redux to use redux in react application, they are react specific */}

      // {/* we can use redux without react-redux, but it is not a good practice, hence we should use react-redux to use redux in react application */}

      // {/* for redux installation we have to install 2 packages
      // npm install @reduxjs/toolkit react-redux

      // redux toolkit is for store and reducer
      // react-redux is for useSelector and useDispatch hooks

      // we have to create a store, which is the single source of truth, from where we get the data and also update the data
      // we have to create a reducer, which is a pure function which takes the previous state and action as argument and return the new state
      // we have to provide the store to the react application using Provider component from react-redux

      // we have to use useSelector hook to get the data from the store
      // we have to use useDispatch hook to update the data in the store */}

      // {/* inside reducer we have to create slice, which is a combination of action and reducer
      // slice is created using createSlice function from @reduxjs/toolkit
      // slice contains the name of the slice, initial state, reducers (which is an object containing all the reducer functions)
      // createSlice function return the actions and reducer
      // we have to export the actions and reducer from the slice */}

      // {/* we have to configure the store using configureStore function from @reduxjs/toolkit
      // we have to pass the reducer to the configureStore function
      // we have to export the store from the store file */}

      // {/* reduxtoolkit is the better version of redux, which is easy to use and less setup is required */}

      // {/* store can be created in src/app/store.js file or we can create in src/store.js file or in src/index.js file
      // reducer can be created in src/features/todo/todoSlice.js file
      // we can have multiple slices for different features, and combine them in the store file  */}

      // {/* but we will create store in src/app/store.js file and reducer in src/features/todo/todoSlice.js file */}

      // {/* we have to wrap the App component with Provider component from react-redux and pass the store as a prop to the Provider component
      // this will provide the store to the entire application */}

      // {/* What's Included
      //   Redux Toolkit includes these APIs:

      //   configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
      //   createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
      //   createAction(): generates an action creator function for the given action type string.
      //   createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
      //   combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.
      //   createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
      //   createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store
      //   The createSelector utility from the Reselect library, re-exported for ease of use. */}
    

