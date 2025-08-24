function customRender(reactElement, container) { // currently the reactElement is parameter or placeholder
    // // first we have to create DOM element and then append it as child
    // const domElement = document.createElement(reactElement.type) // Dom element is created and store in domElement
    // domElement.innerHTML = reactElement.Children // innerHTML is set
    // domElement.setAttribute('href', reactElement.props.href) // an attribute is set
    // domElement.setAttribute('target', reactElement.props.target)// another attribute is set

    // container.appendChild(domElement)

    // if we have many attributes, setting them one by one will take more time, and the code will be repeat again and again
    // we can have a loop to set all those attributes
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

    // the same process of creating element happens in react also, and append it the root
    // it will be clear more, when we check react project created using vite
}

// first of all we will create the a tag in such a way that is shown to the react 

const reactElement = {
    type: 'a', // it can be div, h1 etc
    props: { // properties is an object, we can add as many property as we want
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click to visit google'
    // this reactElement is actulay the job of react
    // but here we are creating it ourself, as we are creating our own react
    // as this is our library, it can be used this way, every element should be written in this format
}

// As we grab the div with Id of root we will grab it too

const mainContainer = document.querySelector('#root');

// As we were able to render any tag we want inside that div with Id root 
// currently I want to render a tag

// now we want to have a method which render our reactElement
// it mean add this reactElement should be added to the div with id root
// we can write that render method as below
// it accept two parameter, what to inject and where to inject

// first of all we have to design this render method above at the top, as we don't know how it works

customRender(reactElement, mainContainer)

// Then we have create the root of Virtual DOM and pass the refernce of the div with Id root


// Summery of custom react
// we created our own react element
// create a container weher we got the root eleemnt from index.html to use it for injecting our react element
// create a render method which take react element and inject it to the container
// create customRender method which create DOM element from react element and append it to the container
// in custom render method we axpect react element in a specific format, which we created ourself in reactElement object


// then we went to main.js of react project created using vite
// and we said that if App is a function, can we create our own function, 
// then we created MyApp function which return an h1 tag
// then we used that MyApp function in render method of react (ReactDOM.createRoot...), and we see that it rendered the h1 tag
// and we see that we can use the MyApp function in the render method of react (ReactDOM.createRoot...) as MyApp(), which also worked, which is not a good practice, and we should not do it
// then we saw that MyApp function gets converted to reactElement type of syntax, can we use reactElement type of syntax directly in the render method of react (ReactDOM.createRoot...), which did not work
// then we created anotherElement where we pass an html tag directly which was working in render method of react (ReactDOM.createRoot...)

// then I have noticed that reactElement was created by me, and I have used key and value and properties of my own choice, hence reactElement created according to my choice will not work in render method of react (ReactDOM.createRoot...)
// then I have used react.createElement method for creating element, which gets injected automatically by babel or transpiler to reactElement type of syntax, which worked in render method of react (ReactDOM.createRoot...)
// then I have used it's correct syntax of parameter, and also used variable in it as below
// tag
// attributes as object
// children
// evaluate expression, where we can inject variables.

