// After Creating the store File, we have to configure the store using configureStore function from @reduxjs/toolkit
// We have to pass the reducer to the configureStore function
// We have to export the store from the store file

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
    // we can add multiple reducers here as an object, if we have multiple slices
    // e.g. reducer: { todo: todoReducer, user: userReducer }
})

// configureStore take an object as an argument, which contains the reducers 
// most of the thinkg takes object as argument in redux-toolkit