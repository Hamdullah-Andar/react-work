import React from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    // We will define some state here
    // We need a state to hold the editable value of the todo
    // As we want to edit the todo message, we will define a state to hold the message of the todo
    // We will initialize it with the current todo message
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    const [todoMsg, setTodoMsg] = React.useState(todo.todo);
    // The todo.todo is comming from the props, as we have complete todos object in props, which include todo id, todo message/todo and complete value
    // so in todo.todo the first todo is complete object and second todo is the todo/message value
    // As we are using this form to loop on all todos, todo indicates each single todo, which has all values of todo, todo.todo gives us the message/todo of a single todo

    // we will destructer updateTodo, deleteTodo and toggleCompleted functionlity from useTodo customer hook as below
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    // We will define editTodo function which will call updateTodo function to update the todo which is comming from the context
    // The updateTodo function expect two parameter, id of the todo to be updated and the new todo object
    // The new todo object should have all the value of the todo, so we will spread the current todo and update only the todo/message value with the new value from the state
    // If we don't spread the current todo, it will override all other value of the todo object
    // after running the updateTodo, we will make isTodoEditable back to false
    const editTodo = () => {
      updateTodo(todo.id, {...todo, todo: todoMsg})
      setIsTodoEditable(false)
    }

    // We will define toggleCompleted function which will call toggleComplete function to toggle the completed value of the todo, which is comming from the context
    // The toggleCompleted function expect the id of the todo to be toggled
    // We can pass todo to TodoItem, even if todo is conext object, as we are passing each single todo to the TodoItem component while mapping on todos array
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    // After running the project we can check the localStorage in application tab of chrome dev tool 

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;