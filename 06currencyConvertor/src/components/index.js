// there is another way of exporting a component which is recommended in big projects
// create index.js file inside components folder and import all the components to index.js and export all of them from index.js
// so while importing the components, which are exported from this file, when don't to write the name of component
// it will get imported just from the component folder as import { InputBox } from './components'
// because everything is in index file and index file get call by default, so it just make the path a little shorter, that's it


// Import InputBox
import InputBox from "./InputBox";

// Export InputBox, we can other component inside the curly brackets {}
export {InputBox}