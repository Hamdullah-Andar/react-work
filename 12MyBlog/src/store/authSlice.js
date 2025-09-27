// we can create a featuer folder, then another folder as auth and make a file as authSlice.js 
// but here we want to create the slice in the same store folder name authSlice.js

// creating the file and it's functionality is important, keeping in separate folder is personal preference

// for creating a slice we need createSlice as below 
// for creating a slice we need it's name, initial state, and all reducers

import { createSlice } from '@reduxjs/toolkit'

// in initial state we user authenticated state is false 
// and userDatat is null 
const initialState = {
    status: false,
    userData: null
}

// authSlice track user authentication whether he is authenticated in or not 
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // as we know that in each actions, we have access to state and action 
        // state has access to the current values 
        // and in action we have access to the payload  
        login: (state, action) => {
            // if some has used or dispatched login reducer we have to make below changes 
            // as we have the same userData in payload we can write it as action.payload.userData or just action.payload 
            state.status = true;
            state.userData = action.payload.userData;
        },

        // as we have access to action in logout actions, but as we dont use is, we can avoid writing it 
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

// we have to export each action (login, logout) separatly as below
export const { login, logout } = authSlice.actions;

// we have to export authSlice reducer and pass it to the store 
export default authSlice.reducer;