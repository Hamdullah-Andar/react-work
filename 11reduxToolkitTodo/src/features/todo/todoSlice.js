// using redux toolkit when we are creating reducer using createSlice function 
// we will name the file as todoSlice.js, which will contain the reducer and actions for todo feature
// adding the slice word in the file name is a good practice, as it will help us to identify the file as a slice file and we are using redux toolkit

// for adding a unique id to each todo item we can use nanoid function from @reduxjs/toolkit
// it will generate a unique id for each todo item

import { createSlice, nanoid } from '@reduxjs/toolkit'

// we have to creat initial state for the todo feature, which we want to be an Object, As we can put anything in the object
const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux Toolkit",
        // we can add as many values as we want in the object 
    }],
    editingTodo: null // Add this to track which todo is being edited
}

// Slice is a bigger version of reducer, which contains the actions and reducer functions together 
// reducer is function which takes the previous state and action as argument and return the new state 

// createSlice // it is a function which takes an object as an argument, which contains the name of the slice, initial state, reducers (which is an object containing all the reducer functions)
export const todoSlice = createSlice({
    name: 'todo', // name of the slice, which will be used as a prefix for the action types
    initialState, // initial state of the slice, we can directly write the object here also
    reducers: { // reducers is an object which contains all the reducer functions and properties
        addTodo: (state, action) => {
            const todo = { // as we store todo item in an object, so creating an object here
                id: nanoid(), // generating a unique id for each todo item
                text: action.payload, // getting the text from the action payload
            }
            state.todos.push(todo) // adding the new todo item to the todos array
            // in redux we were not allowed to mutate the state directly, but in redux-toolkit we can mutate the state directly, as it uses immer library internally to handle the immutability
            // so we can use push method to add a new todo item to the todos array

            // below line is AI notes about mutation in Redux Toolkit:
            // ✅ So your statement is valid, but the key point is: it looks like direct mutation in RTK, but it’s still immutable behind the scenes thanks to Immer. 
        },
        // we will write the logic for adding a todo item here or we can write outside the object also and use it reference here
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }, // we will write the logic for removing a todo item here or we can write outside the object also and use it reference here
        
        // in Context API we were writing declaration of functions inside the object only but not it's definition,
        // here in redux-toolkit we can write both declaration and definition of functions inside the object or we can write outside the object and use it's reference here
        // in any reducer function we will have access to state and action object 
        
        // state is the previous state of the slice, which we can use to update the state
        // action is an object which contains the type and payload, which we can use to update the state

        // updateTodo: (state, action) => {
        //     const todoText = state.todos.map((todo) => (todo.id === action.payload ? todo.text : todo))
        //     console.log("Todo Text : ",todoText)
        //     console.log("Update state : ",state)
        //     console.log("Update Action : ",action.payload)
        // }


        // Add this new reducer for updating a todo
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todoToUpdate = state.todos.find((todo) => todo.id === id)
            if (todoToUpdate) {
                todoToUpdate.text = text
            }
            state.editingTodo = null // Reset editing state after update
        },

        // Add this to set which todo is being edited
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload
            console.log("State Dot Editing Todo : ", state.editingTodo)
        },

        // Add this to cancel editing
        cancelEditing: (state) => {
            state.editingTodo = null
        }


    }
})

// we have to export the actions and reducer from the slice
// action is an object which contains the type and payload, which we can use to update the state
export const { addTodo, removeTodo, updateTodo, setEditingTodo, cancelEditing } = todoSlice.actions // exporting the actions from the slice, as we will use these action in components to dispatch the actions to the reducer
export default todoSlice.reducer // exporting the reducer from the slice, which will be used in the store file

// we will import this reducer in the store file and pass it to the configureStore function
// Store will update the state using this reducer function when an action is dispatched only for this slice