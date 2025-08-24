import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// After creating our own react, and understing tht App is a function can we declare our own function here as MyApp
// Yes we can do it

function MyApp(){ // so can we use this MyApp below instead of <App />
  return(
    <div>
      <h1>The is custom APP ! | Hiii</h1>
    </div>
  )
}

// As above is a function, then where this syntax <App /> come from, As this is JSX syntax
// every react use a bundler, which convets the syntax, modify the syntax, make the syntax better
// when we have reactElement syntax in our own created react, it is converted by bundler
// as we are writing the function as MyApp, hence this syntax is easier, but react dosn't know the syntax where html is used in MyApp
// that's why it is called JSX, html is mixed in the JavaScript
// Actually the syntax should have been like reactElement in our own created react, so that we could create tree of it
// so the MyApp syntax which includes html gets parsed or converted to a tree to the reactElement type of syntax
// if MyApp is a function and <MyApp /> is JSX, so babel or any other transpiler will be converting MyApp too
// As MyApp is a function can run it as MyApp() also, Yes
// We should not do this, we will face problem in convention, optimization and how other write the things
// But you can impress your friends by using MyApp() instead of <MyApp />


// As we said that above MyApp is converter to reactElement type of syntax as below
// so avoiding the conversion of MyApp to reactElement type of syntax, can we use reactElement type of syntaxt directly in the render method as <reactElement />
const ReactElement = {
    type: 'a', // it can be div, h1 etc
    props: { // properties is an object, we can add as many property as we want
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click to visit google'
}

// let's create another element
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click to visit google
  </a>
)

const anotherUser = " (this is another user)"; // where shoul this variable goes in createElement function

// we will create another element using createElement method of react
const reactElement2 = React.createElement(
  // createElement accept three parameter
  'a', // first is the type of element
  { href: 'https://google.com', target: '_blank' }, // second is the props as an object, her we add properties, and here we don't give it a name as we have used props in the reactElement object above, if we don't have attribute we can leave it empty as {}
  'Click to visit google', // third is the children, it
  // After creting the coplete tree we can use variables
  anotherUser // we can also pass variable here, as it will get converted to string, 
  // but we cannot use if else or for loop here, as it will not get converted to string, 
  // as it converted to Object, hence we can use if foor loop above the createElement method and use the final outcome here
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    // MyApp() // this is not a good practice, but it will work

    // <ReactElement /> // we should get an a tag, which we dont get because we are trying to render reactElement as a component which gets parsed by transpiler or babel, which accept JSX or function
    // this will not work, as reactElement is not a function or component, it is an object
    // <reactElement /> is similar to reactElement(), where our reactElement is not a function, but it is an object

    // As reactElement is custom react, and we have written custome render for it in 02customReact/customreact.js
    // but here we don't have custom render method, we are using render method of react (ReactDOM.createRoot...), which axpect different type of parameter

    // anotherElement // this will work as this will get converted to an object by the transpiler or babel
    // as I have not keep it in any syntax, or used () with it as function
    // nor I have used <anotherElement /> with it (which is wrong anyway as it is not a function or component
    // but it will get converted to an object by the transpiler or babel

    // but the reactElement will not work here, because it is not in JSX syntax, nor it is a function or component, as we have created it ourself and rendered it using our own custom render method in 02customReact/customreact.js
    // hence render mehthod of react (ReactDOM.createRoot...) will not understand it. and it will expect it's own type of syntax to render it

    // we will how it is converted to tree

    // we can also use createElement metho of react to create element, so that we can use it in render method of react (ReactDOM.createRoot...)
 
    // reactElement2 // this will work as it is created using createElement method of react  

    <App />
)
