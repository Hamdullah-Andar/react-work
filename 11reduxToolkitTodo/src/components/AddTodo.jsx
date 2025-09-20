import React, { useEffect, useState } from 'react'
import { addTodo, updateTodo, cancelEditing } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function AddTodo() {

    const [input, setInput] = useState('') // to store the input value
    const dispatch = useDispatch() // to dispatch the action to the reducer

    const editingTodo = useSelector((state) => state.editingTodo)
    console.log("Editing Todo : ", editingTodo)
    // Update input when editingTodo changes
    useEffect(() => {
      console.log('Editing todo changed:', editingTodo)

      if (editingTodo) {
        setInput(editingTodo.text)
        console.log("Set Editing Todo : ", editingTodo.text)
      } else {
        setInput('')
      }
    }, [editingTodo])


    // const addTodoHandler = (e) => {
    //     e.preventDefault() // to prevent the page from reloading
    //     dispatch(addTodo(input)) // dispatching the addTodo action to the reducer with input value as payload, pass addTodo to the dispatch function, where addTodo accept the input value as argument, 
    //     // which is the text of the todo item, which will be stored in the action.payload in the reducer function
    //     // Dispatch make changes in the store with the help of reducer function, addTodo is the action which we are dispatching to the reducer
    //     setInput('') // to clear the input field after adding the todo item
    // }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (input.trim() === '') return
      console.log("Inside handle Submit")
      if (editingTodo) {
        // If we're editing, dispatch updateTodo
        dispatch(updateTodo({ id: editingTodo.id, text: input }))
      } else {
        // Otherwise, add a new todo
        dispatch(addTodo(input))
      }
      
      setInput('')
    }

    const handleCancel = () => {
      dispatch(cancelEditing())
      setInput('')
    }


  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button> */}

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
      {editingTodo && (
        <button
          type="button"
          onClick={handleCancel}
          className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Cancel
        </button>
      )}

    </form>
  )
}

export default AddTodo

// As we are adding something to the store, we will use useDispatch hook from react-redux to dispatch the action to the reducer

// useSelector and useDispatch is react wireup for redux

// useSelector is used to get the data from the store
// useDispatch is used to dispatch the action to the reducer