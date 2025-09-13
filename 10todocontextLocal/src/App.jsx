import { use, useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // as we have to store todo data and update UI, so we have to use useState as below
  // default value should be [] as we are trying to loop on it, if we don't get any value, we will get error while mapping it
  const [todos, setTodos] = useState([])

  // so let define functionality one by one
  // why should define functionality here, and how we can do it (we can do it using the provider of the context)
  // using the value params of the provider we can destructure the context
  // and define it's methods using with exact name of the methods as below

  // todos in the state show all the todos
  // todo in below addTodo function is single todo which is going to be added
  // the todo in parameter should go/add to the todos of above useState() 
  // if we set it like setTodos(todo), it will replace all array with the current single todo

  // In setTodos we get call back funcion, which has access to all previous value (we can name it anything) we have named it prevTodo and use it as param in the call back, 
  // in the call back function we create a new array by spreeding the prevTodo using spread operator and add new vlaue too it.
  // the new todo should be added as an object not directly string as setTodos((prevTodo) => [todo, ...prevTodo]) , 
  // as we have the single todo as object in TodoContext, we have to add it as below, Where todo is spreaded to get all it's value and current date is added to it as id
  // setTodos((prevTodo) => [{id: Date.now(), ...todo}, ...prevTodo])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{id: Date.now(), ...todo}, ...prevTodo])
  }

  // after maping on each todo we check if the prevTodo id is equal to given id in the param of updateTodo
  // if it is true add new todo, otherwise leave prevTodo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?  todo : prevTodo))
  }

  // while deleting todo using map is not a good idea 
  // here we want to create a new array which does not include a todo of id which is passed in deleteTodo
  // So we have to filter, we have to tell the filter accept all the value exepct the one where it's id match with the id pass in deleteTodo
  // filter works on true statement, we will get all the todo in the array where id does not math, but we will not get todo where it's id matches with id pass to deleteTodo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  // in toggleComplete we have to go to each individual todo and toggle the value of complete 
  // in setTodos i have access to prev which is all previous values of todo 
  // i want to map on all prev values and map accept a call back where i have access to each individual todo 
  // I wnat to check each individual todo id with the id pass to toggleComplete
  // if it match we should toggle the value of completed in that todo 
  // (for toggling it's value if we use only completed value it will override the complete object, to keep all other value of the object we have to use spreed operator,
  // and take only the completed key of object and toggle it as below)
  // otherwise we will the todo as it is
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  // Local Storage 
  // local storage is something which belong to browser, which we can access through JavaScript, React, Vue. so is not JavaScript, React, Vue specific
  // if we search about local Storage we will get only two method about local Storage, setItem and getItem
  // Stoging value in local storage will be saved in sting format, we can convert to json when required
  // while saving in data/value in local Storage we have to convert it in string format

  // We have to load all those todos which are stored in local Storage
  // We can use useEffect to fetch data from local Storage

  useEffect(() => {
    // We can directly access local storage
    // When we are in react, and we don't use server side rendering, we can access local storage
    // when can not access local Storage in server, as it is available only in browser

    // For getting item from local Storage we have to use the key on which we have stored the value
    // As we will get data from local storage in String format we have to convert it to JSON format using JSON.parse()
    
    // we will add a conditional check, which check if we have todos then only we will use setTodos
    // otherwise it will give error or the system will crash if we don't have any todo in local storage
    // As we have our todos in array format we will check if the length of the todos is greater than 0
    // then only we will use setTodos

    // this useEffect will run only once when the component is mounted

    // JSON.parse() will convert the string format to JSON format
    // JSON.parse() comes with JavaScript, React or Vue specific

    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])


  // we can use multiple useEffect in a component too
  // the next useEffect will add the todos to local Storage, whenever a new todo is added, updated or deleted
  
  // We can not use todos in the dependency array of above useEffect, as it will get the todos from local Storage too
  // hence we can write a separate useEffect for adding todos to local Storage

  useEffect(() => {
    // we have to convert the todos in string format using JSON.stringify()
    // and add it to local Storage using setItem method of local Storage and pass the key and value as below
    // JSON.stringify(todos) will convert the todos in string format
    // JSON.stringify() comes with JavaScript, React or Vue specific
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  // Above useEffect will run whenever there is a change in todos, as we have added todos in the dependency array

  // Now we have to add components for adding todo and showing todo

  // We can directly have access to the context in the components where we want to use it
  // As we have wrapped our whole app in the provider of the context, we can access it anywhere in the app

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {/* we will loop on todos from context, inside the loop we will pass prop to single todo item and call it too  */}
              {/* using {} in the call back of map will need to return something  */}
              {/* but we will () which will auto return the value inside the call back of map funciton  */}
              {/* for making the div inside the map we can use keys, if we don't use a key we will get just a warning and the program will run, but late the performance will degrade so much 
              as their might be many item looks alike for which we are trying to change but in reality they might be the same */}
              {/* As todos are array, we can pass index in the parameter of call back of map function, and use it as the key 
              using index we can not good performance, their are some draw back, and pet fall of using index of the array, so we have to avoid, if there was no option we can use index also.
              while using index as key, and a value get deleted from the array. the value will get update, but we have to update the index for all values too 
              but if we use unique id other then index, the key and the value of that unique id will be disapred */}

              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
