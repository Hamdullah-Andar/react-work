import React, { Component, createContext }  from "react";

const UserContext = createContext()

export default UserContext

// The starting point of Context API is not studying it from Documentation
// The Starting point of Context API is knowing about the props in React
// Then you have to face the problem in porps 
// For solving the problem of props, you have to use Context API, Redux, Redux-toolkit (RTK), react-Redux, Zustand and more

// The problem of props in the very begining of React was passing props to the components 
// For Example: if we have a card which is inside the TopComponent, which is RightSideComponent, which is inside the Dashboard
// hence we have to pass the props to Dashboard, then pass it to the RightSideComponent, then pass it to the TopComponent, then pass it to the card
// Our intention was to pass it to The Card Component, but passing the props was not necessory to the RightSideComponent and TopComponent, but we have to pass it thourgh these componet as they are parents componets of Card and it was the only way to get it in the Card Through these components

// Passing the props down through multiple level of component just to reach it to a deeply nested child, is called props drilling

// hence the context API created by React to avoid passing props through component where it is not required, and pass it directly to the component where it is required
// Context API is purely associated with React, we don't need to install any library for it, we can not find it outside React

// As this issue was available in other then React also hence we have other libraries too like Vue and others, like Rebux, react-Redux, Redux-toolKit (RTK), zustand and more 
// Redux is standalone library, Redux is used for State management, there are different version of Redux 
// if we want to use it in React we can use react-Redux version of Redux in React 
// there is another easier verion of Redux which is called Redux-toolKit (RTK)
// zustand is also a state management library

// if we learn Conext API we can understand other state management libraries easily 

// We can add context API in the begining of the project or later when it is required 
// Almost all react project should have state management like Context API

// context API is like a global variable, where we keep all our data, which is accessable through out the application

// If we try to store variables in a separate global file and access them 
// throughout the application (without Context API), React won’t automatically 
// re-render components when those variables change. 

// This is because React only tracks state updates made via hooks like useState() 
// or useReducer(). Updating a plain variable in a global file won’t trigger a 
// re-render, which can cause UI and data mismatches. 

// Context API, on the other hand, allows us to share state across the entire 
// component tree, and ensures that when the state updates, all subscribed 
// components re-render automatically.

// we will create Context in two separate files
// As we may have context for User, Login, Product, we can create multiple context