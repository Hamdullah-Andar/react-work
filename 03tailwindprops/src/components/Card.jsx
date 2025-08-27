import React from "react";

    // Props make a component reusable, 
    // we can make a card, and keep it in a component and pass props to reuse it  

    // in web development, html, css and javaScript are kept in separate files
    // but react want to keep them in a same file, but separate them by functionality 

    
    // we have used the card twice where we have the same data in both card
    // we may want to show different data in both the Card
    // props help us to pass separat data to each card and show it 

    // let console the props, and see what we get in props 

const Card = ({example, btnText="Visit me"}) => {
    // in each component including App has access to props
    // After consoling the props, it show an empty Object
    // After opening the object you will [[prototype]]: object, which is called hidden scope
    // console.log("Props : ", props)

    // we can add value to the empty object of props, in the card where it is used as <Card example="Sample data"/>

    // we can recieve these pass values <Card example='Sample data' objectProps={newObject}  someArry={newArray}/> as below
    // console.log("Props Passed Value : ",props.example)
    // console.log("Props Passed Object : ",props.objectProps)
    // console.log("Props Passed Array : ",props.someArry)

    // there is another way to access the props by destructuring it as above, which will avoid writing the props prefix 
    console.log("Example props : ",example)

    // hence we can use the destructure value anywhere in this file
  return (
    <div className="relative max-w-lg p-8 border bg-black border-gray-100 shadow-xl rounded-xl">
      <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
        4.3
      </span>

      <div className="mt-4 text-gray-200 sm:pr-8">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // we have converted stroke-linecap to strokeLinecap, stroke-linejoin to strokeLinejoin, stroke-width to strokeWidth as we are using react not vinilla JavaScript
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          ></path>
        </svg>

        <h5 className="mt-4 text-xl font-bold text-gray-300">
          {example}
          {/* this is how we can use the destructure value of example */}
        </h5>

        <p className="mt-2 text-sm">
          You can manage phone, email and chat conversations all from a single
          mailbox. {btnText}
        </p>
      </div>
    </div>
  );
};

export default Card;
