import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
import { Home, About, Contact, User, Github, githubInfoLoader } from './components'

// There are two way of Creating router
// First way – Object-based route config
// which use createBrowserRouter method which comes from react-router-dom
// it takes an array, and we can put object inside the array

// Note from AI about Object-based route config
// Define routes as plain JS objects.
// Good when routes need to be built dynamically (e.g., from an array, API, or role-based access).
// Children render inside <Outlet /> in the parent component.
// path: "" = matches exactly / (useful for Home page).

// const router = createBrowserRouter([
//   {
    
//     path: "/", // this is top level element, nesting happen inside the /
//     element: <Layout />, // the element which is going to be rendered in / is added here, we can render Layout here, we could write in App.jsx whatever we have in Layout and render it here
//     // As we have used the Outlet, where we want to display all the children, hence we have to add all the children in this Object
//     // Above path and element will Display our Layout, which will show Header and Footer only,
//     // To disply something in the Outlet of layout we have to use below childern section
//     // Where we can have path and element similar as above for each child, which will dispaly the element on it's respective path
//     // /about route in the url will display About page or component

//     // For Displaying Home page or component after the /, writing Home again is not looking good or good practice
//     // hence we have to display Home on just /, therefor we should give the path as "" (Nothing after the / which is from parent above) and display Home
//     // that why we should have the fist child as path: "" and element: <Home />, which display Home on /,
//     // Otherwise we will have just Header and Footer with out any child to be displayed in the Outlet


//     // Comment added by AI
//     // This is the root route. The <Layout /> component will always render,
//     // and it includes <Header /> and <Footer /> with an <Outlet /> in between.
//     // The <Outlet /> is where child routes will be displayed.

//     children: [
//       {
//         path: "", // as we have to display something on just the / and normally we display home page or component in /
//         element: <Home />
//         // Comment added by AI
//         // Empty string ("") means this child renders at exactly "/".
//         // This is typically where we display the Home page.
//       },
//       {
//         path: "about",
//         element: <About />
//         // Comment added by AI
//         // "/about" will render the <About /> component inside the Layout.

//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// Second way – JSX route elements
// let try creating route in another and a little easy way 
// first of all we are using the same createBrowserRouter method. and store it value in router variable, which is passed to RouterProvider
// Then we are using createRoutesFromElements method
// The we are using <Route path='/' element={<Layout />}></Route>, 
// And we are creating Child self closing Routes inside it 
// Route can have open and closing tag as <Route></Route> or it may be self closing as <Route />

// Note from AI about JSX route elements
// Define routes as JSX <Route> elements.
// Feels more React-like, easier to read/write by hand.
// <Route> can be nested directly inside another <Route> for children.
// Self-closing <Route /> works when there are no children.

// Quick Takeaway
// Object way → best for programmatic/dynamic routes.
// JSX way → best for declarative/static routes.
// ✅ Both produce the same routing config for React Router.

const router = createBrowserRouter(
  // createRoutesFromElements is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.
  // We can add nested routes inside the child route of Layout route as well
  // first of all we have to add closing tag to the route which we want to add some childs and add child routes to it as below
  // <Route path='about' element={<About />} >  
  //    <Route path='somePath1' element={<someElement1 />} />
  //    <Route path='somePath2' element={<someElement2 />} />
  // </Route>

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
      {/* when we want to take paramter from url, it is going to be added her first
      in user/:userId the userId is very important we have to take it using this name from the url
      so we can get the userId in url parameter in <User /> component 
      The :userId part defines a dynamic parameter in the route. */}
      {/* to take dynamic value from the url as userId, we have to use exact name in the User component to recieve the data, 
      and we have to use the useParams() method from react-router-dom too, to recieve the data */}
      <Route path='user/:userId' element={<User />} />
      {/* <Route path='github' element={<Github />} /> */}
      <Route 
        // we have pass githubInfoLoader to loader as below which fetch the data when the Github component is about to load on this current (github) route
        // passing githubInfoLoader will fetch the data and we will be able to access it in Github component uisng the useLoaderData method from react-router-dom and store it in vairable ex: data
        // And display/show the data in the Github Component
        // We can optimize data fetching using loader as below in a component where we have API Call
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* As we don't use App here, we get the component through router, hence we can delete the App too
    And we are getting everything here using the RouterProvider */}
    {/* RouterProvider takes a props, with out prop it will not work 
    we will pass it the router prop and create the router too */}


    {/* after creating the router using createBrowserRouter as above, we have passed it to RouterProvider below  */}
    {/* RouteProvider is a wrapper  */}
    <RouterProvider router={router}/> 
  </StrictMode>,
)
