// Store can be created using configureStore 
// Store want to me about all the reducers

// Store come from redux, not from react-redux


import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        //TODO: add more slices here for posts
    }
})

export default store;