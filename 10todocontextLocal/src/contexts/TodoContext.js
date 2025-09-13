// We don't need to install anything for using context 
// Context API come with react, hence we don't need to install any external package

import { createContext, useContext } from "react";

// As we have two ways

// first 
// use separate file for createContext and contextProvider

// Second
// put both createContext and useContext in the same file 

// if we get some JSX in return of file we can give it .jsx extention otherwise use .js extention 


// AI give note for context API with and without provider
    // React Context + useContext Quick Note
    // useContext(MyContext) looks up the tree for the nearest <MyContext.Provider>.
    // Without a Provider, it returns the default value from createContext(defaultValue).
    // With a Provider, it returns the value prop from the closest Provider.
    // Use Provider when you need dynamic/shared state.
    // Without Provider, it’s only useful for static defaults/configs.

    // 👉 Rule of thumb:
    // No Provider → useContext = default value.
    // With Provider → useContext = provided value.


// Where to Wrap Context Provider?
    // Wrap App.js (or higher in main.js/index.js) if context is global (e.g., theme, auth, language).
    // Wrap only a component subtree if context is feature-specific.
    // Any child of <Provider> can access context via useContext.
    // No Provider → useContext returns default value from createContext(defaultValue).

    // 👉 Rule of thumb:
    // Global state/config → wrap at root (App.js or main.js).
    // Local/feature state → wrap only where needed.


// some important notes
    // todo lists are arrays
    // array has todo/title
    // array has a unique id (Database will create a unique id, As we are not storing todo in database, hence we have to create our own id, it can be random sting, number or date)
    // We have completed state too

// todo include below information (basic structure every todo has)
    // id, todo/title, completed

// functionality
    // AddTodo
    // ToggleComplete
    // EditTodo (we need id of todo, to edit specific todo)
    // DeleteTodo
    // ReadTodo


// How to write above functionality in context
    // As we want all this functioality to be accessable to all the components wrap in the context provider

    // so we will start from passing object of default value to the createContext as below

export const TodoContext = createContext({
    // we can add some default value in this createContext object 

    // todos are inside an array and each item is an object in it as below
    // we will add a single to do to remeber the modal, later we will delete it and it from addTodo
    // todo is property in createContext but it is an array and objects in it, so to read it we need to map (loop) on it, similar to theme: dark
    todo: [
            {
                id: 1,
                todo: "Todo Message",
                completed: false
            },
            // {}, {}
        ],

        // we can add empty function without difinition here in the object, we can define this function in App.js wher we have used context Provider 
        // using redux writing function in context is a little different

        // addTodo expect a todo/message then the function will do something  
        // We can decide what the function should do (add a todo) in App.js or we can use it in any other file too
        // context API is not used for big project, in big project we can use redux, zustand and other state menagement library
        // so most of the context API functionality is defined like this, but other people can use other ways too
        addTodo: (todo) => {},

        // updateTodo is not toggleTodo, we update the complete todo here 
        // In update we need id, and todo to update it
        updateTodo: (id, todo) => {},

        // while deleting todo we need todo id only
        deleteTodo: (id) => {},

        // while toggling todo we need todo id as well
        toggleComplete: (id) => {}

        // We have not created the functionlity yet, 
        // we have just see/add what property and method we have in this context

        // We will define the functionality of method in any component (May be in App.js), but we have to get todo data from the todos property of this context in any component
        

})

export const useTodo = () => {
    return useContext(TodoContext)
}

// to use TodoProvider instead of TodoContext.Provider when wraping everything with provider in App.js, we have used below line
export const TodoProvider = TodoContext.Provider