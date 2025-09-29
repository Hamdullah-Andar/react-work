import React, { useId } from 'react'
// the select component accepts below props 

const Select = ({
    // we will recieve options as an array 
    options,
    label,
    className = "",
    ...props
}, ref) => {
    const id = useId();
  return (
    <div className='w-full'>
        {/* we can give label a value, but it is not required  */}
        {label && <label htmlFor={id} className=''></label>}
        {/* we will pass all the props given by user  */}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* we will loop/map on options array and we can use optional chaining */}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

// we can use React.forwardRef at the top defining the component or below while exporting it 
export default React.forwardRef(Select)