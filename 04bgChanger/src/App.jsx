import { useState } from 'react'

function App() {
  const [myColor, setMyColor] = useState('lightblue');

// How to Aproach
// we are changing the color, we have to store it somewhere
// create a div in and set a color to it using inline css style as style={{backgroundColor: myColor}}
// As we have a {} around the backgroundColor, we don't need to put myColor inside bracket like this again {myColor}
// create another div at the bottom of the page
// create another div and put buttons in it
// Add onClick mose Event to each button and use the call back funtion in it and set the color to desired color as onClick={() => setMyColor("Green")}

// we can not directly set the color as onClick={setColor}, because we are passing the reference to the onClick, we can not pass parameter here
// but if we pass the parameter as onClick={setColor('red')}, we have actullay pass the return value of the setColor function, which is not expected by onClick, but we need to pass the color to change the color base on the passed color
// hence we have to use call back, () => {}, call back is function, which is expected by onClick, call back call setColor, a call back function actaullay call another function internally

//   Perfect — here’s a compact but complete cheat sheet for <div> in React 🚀

// 📌 React <div> Cheat Sheet
// 🔹 Core Attributes

// id – unique identifier
// className – CSS classes (class in HTML)
// style – inline styles (JS object)
// title – tooltip text
// hidden – hide element
// tabIndex – keyboard navigation order
// draggable – enable drag

// 🔹 Event Handlers (camelCase in React)

// Mouse Events

// onClick, onDoubleClick
// onMouseEnter, onMouseLeave
// onMouseMove, onMouseDown, onMouseUp
// Keyboard Events
// onKeyDown, onKeyUp, onKeyPress
// Focus Events
// onFocus, onBlur
// Drag Events
// onDrag, onDragStart, onDragOver, onDrop, onDragEnd
// Touch Events (mobile)
// onTouchStart, onTouchEnd, onTouchMove, onTouchCancel

// 🔹 Accessibility

// role – semantic role (e.g., "button")
// aria-* – ARIA attributes (aria-label, aria-hidden, etc.)

// 🔹 Children

// Wrap any JSX:

// <div>
//   <p>Hello</p>
//   <button>Click</button>
// </div>

// 💡 Key Differences from plain HTML

// Use className instead of class
// Inline style is a JS object
// Event handlers are camelCase (onClick not onclick)

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: myColor}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'red'}} onClick={() => setMyColor("red")}>Red</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'green'}} onClick={() => setMyColor("green")}>Green</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'blue'}} onClick={() => setMyColor("blue")}>Blue</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'olive'}} onClick={() => setMyColor("olive")}>Olive</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'gray'}} onClick={() => setMyColor("gray")}>Gray</button>
          <button className= 'text-black shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'yellow'}} onClick={() => setMyColor("yellow")}>Yellow</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'pink'}} onClick={() => setMyColor("pink")}>Pink</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'purple'}} onClick={() => setMyColor("purple")}>Purple</button>
          <button className= 'text-black shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'lavender'}} onClick={() => setMyColor("lavender")}>Lavender</button>
          <button className= 'text-black shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'white'}} onClick={() => setMyColor("white")}>White</button>
          <button className= 'text-white shadow-lg py-1 px-4 rounded-full outline-none' style={{backgroundColor: 'black'}} onClick={() => setMyColor("black")}>Black</button>
        </div>

      </div>
      
    
    </div>
  )
}

export default App
