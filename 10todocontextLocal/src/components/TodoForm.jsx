import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    // We have to define a state to hold the input value for single source of truth and controlled component to save the input value
    const [todo, setTodo] = useState('')

    // We need addTodo functionality here, in this TodoForm component
    // As we have wrapped everything in App.js with TodoContextProvider and defined addTodo function there, hence the addTodo function is available here in this component
    // hence we can get that function from useTodo custom hook which return useContext, 
    // where in useContext we have passed todoConext, and our todoContext has addTodo function, and other functionality too 
    // so we can get addTodo function from useTodo custom hook, which is defined in TodoContext.js


    const { addTodo } = useTodo()
    // we destructured addTodo function from the object returned by useTodo custom hook
    // addTodo expects a todo/message as argument, so we will pass the input value to it on form submit
    // When we check addTodo in todoContext.js, it take a todo/message as argument, but it's functionality is not defined there, 
    // we have defined addTodo in App.js where we have used TodoContext.Provider to wrap everything

    // we will define add function which will trigerd by by clicking the add button 
    // inside the add function we can use preverntDefault() to prevernt form default behaviour which is reloading the page 
    // return if there is no value in todo 
    // We can not pass todo to addTodo directly as addTodo(todo), as it will override all other value of todo object 
    // Call addTodo function and pass todo value as an object, as the addTodo functionality spread all todo value and add current data as id to it 
    // We can add other value in the object too if we want to add more value to the todo object, here we want to add "compoleted: false"
    // when the key and value are same we can write it once, so here we can write only todo instead of todo: todo
    // we can use current date as id here in add function or in addTodo function definition in App.js 
    // finally we will clear the input field by setTodo to empty string

    const add = (e) => {
      e.preventDefault()
      if(!todo) return
      addTodo({todo, completed: false})
      setTodo('')
    }

    return (
        // we will attach add function to the form onSubmit event
        // We have to wire up value with the input field to make it controlled component as value={todo}
        // we will attach onChange event to the input field to update the state as user type
        // in onChange event we will get the event object, from that we can get the value using e.target.value and set it to the state using setTodo setTodo(e.target.value)
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
