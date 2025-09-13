// index.js file is created to re-export everything within the folder 
// and whomever want to import those exported component, they can get it from this file

// note given by AI for index.js file usage
    // Acts as an entry point for the component.
    // Useful for re-exporting multiple components from the same folder.
    // Helps in scalability & refactoring (file renames don’t affect imports).
    // Not required, but a common convention in professional React projects.


export { TodoContext, TodoProvider, useTodo} from "./TodoContext"

// useTodo has access to useContext, and the TodoContext is provided to it, hence we can access all data of context
// and we need not to export every Context method separatly