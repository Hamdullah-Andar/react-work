// Start of vedio 22 react-form-hook

// in a form we normally create inputs and a submit button and take inputs value and send it using the submit button

// we can create a separate component for input, which we can use it later any where we want passing props to it

// we will divide the header to header and logout button components 

// below container accept properteis as childern 
// we can name it childern or anything else 
// container is a box, where we can define styling properties 
// and it display the values as it is comming to it through childern

// we can write single line return section in a single line with removing the parantheses and use semicolon at the end of it
import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container