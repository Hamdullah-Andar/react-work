import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// should we read virtual DOM? Yes
// is virtual DOM used these days? No

// interviewers ask about virtual DOM to check your previous knowledge,

// What does createRoot do?
// It creates a root for rendering a React application in the DOM.

// it creates DOM like structure in memory
// as we have a DOM in the browser, we have a virtual DOM in memory
// createRoot creates a root for the virtual DOM

// After creating the DOM structure in memory, React will compare it with the previous version of the virtual DOM (if any) to determine what has changed. This process is called "reconciliation."
// Once React identifies the changes, it will efficiently update the actual DOM in the browser to reflect. it will update only the parts of the DOM that have changed, rather than re-rendering the entire DOM. This helps improve performance and responsiveness of web applications by minimizing the number of direct manipulations to the DOM, which can be slow and inefficient.

// the browser remove the DOM and create it again, this is called page reload
// React only updates the parts of the DOM that have changed, this is called reconciliation

// in virtual DOM, the complete DOM is not removed and created again, only the parts that have changed are updated, it can be tracked in tree like structure and update only the parts that have changed

// if we get another update in the middle of an update, React will pause the current update, process the new update, and then resume the previous update. This helps ensure that the UI remains responsive and up-to-date, even when multiple updates are happening simultaneously.
// React batches multiple updates together to optimize performance. Instead of updating the DOM immediately after each change, React collects multiple changes and applies them in a single update cycle. This reduces the number of times the DOM is manipulated, which can be slow and inefficient.
// React can pause and resume updates to the DOM as needed. If a high-priority update comes in while a lower-priority update is being processed, React can pause the lower-priority update, handle the high-priority update, and then resume the lower-priority update. This helps ensure that the most important updates are applied first, improving the overall responsiveness of the application.

// Search React Fiber to learn more about it

// React Fiber Architecture
// React Fiber is a reimplementation of the React core algorithm, introduced in React 16,
// designed to improve the rendering performance and responsiveness of React applications.

// Inroduction of Fiber
// React use Fiber algorithm to to update the virtual DOM and the actual DOM in a more efficient and flexible way.
// The key features of React Fiber is to pause, resume, and prioritize updates to the DOM.

// Hydration
// Hydration is the process of converting a server-rendered HTML page into a fully interactive React, which involves attaching event listeners and initializing the React component tree on the client side.

// it is hard to read the Fiber code, but you can read the concepts and ideas behind it

// Prerequisites:
// React Components, Elements, and Instances
// Reconciliation: reconciling the differences between the current and previous virtual DOM
// React Basics: JSX, props, state, lifecycle methods
// React Design Principles: declarative programming, unidirectional data flow

// What is reconciliation?
// The algorithm that React uses to update the DOM efficiently by comparing the new virtual DOM with the previous version and determining what has changed.

// Developer does not need to think how to switch from one state to another, React will handle it

// Reconciliation is the algorithm behind what is popularly known as the Virtual DOM.
// When we created an onject in JSX, then pass it to render function in other application, the previous DOM is compare with the new One and The three gets updated
// when somthing changes using the useState(), only those part will be updated in DOM

// Fiber is a ground-up rewrite of the reconciler. the high level algorithm will be largly the same. the key points are
    // Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
    // Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

// the reason we are using keys in array or list, is to improve the performance

// The key points are:
    // In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
    // Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
    // A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

// What is Fiber

// A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

// We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

// pause work and come back to it later.
// assign priority to different types of work.
// reuse previously completed work.
// abort work if it's no longer needed.