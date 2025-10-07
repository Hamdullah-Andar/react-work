// we will create a common button design, so that we could use it through out the application 
// childern will accept the text for the button and display it 


import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-300',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    // `` is javascript syntax, so we use it inside {}
    // className is empty string and ...props is spreaded, as it accepts className as props as well from user
    // and the ...props accepts all other props which is not mentioned above
    <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button