import './App.css'
import Card from './components/Card'

function App() {

  const newObject = {
    myName: "Ahmad", 
    age: 14
  }

  const newArray = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* while adding a class from tailwind css in our JSX, we use it as className as above */}


    
      <Card example='Sample data' objectProps={newObject}  someArry={newArray} btnText="Click me"/> 
      {/* the "example='Sample data'" vlaue is passed here and it is shown in the porps object  */}
      {/* we can not pass the props as arrayExample=[1,2,3] or objecExample={name: "Ahmad"}  */}

      {/* but we can declare an object and pass that object a variable as above objectProps={newObject}  */}
      {/* smiliarly we can declare an array and pass it as variable means {} as above someArry={newArray}  */}
      
      
      {/* now we can pass a differen value to this card after using pass value in above Card component  */}
      <Card example='Ahmad' />
  
    </>
  )
}

export default App
