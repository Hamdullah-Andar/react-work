import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// First of all we have to create UserContext as in UserContext.js file
    // We create context in UserContext.js using createContext() method
    // And store it in a Variable in Export that Variable

// Second as a context give us a Provider as above in current file, as it provides variable to us
    // Every Context is a provider, 
    // UserContext is also a Provider.
    // hence we have to put it in a wrapper, and the components in it will have access to all the variable provided by the context providor

    // assume a context as a global variable

    // It mean when we create a context, 
    // We have to create a providor for it, Which provide the data. 
    // To user we have to put components inside the context providor as <UserContextProvidor></UserContextProvidor>
    // And all the components within <UserContextProvidor></UserContextProvidor> will have access to to the variable provided by the context providor


    // The context providor shoud give .jsx extention, as it provide access to variables to all it's inside components as <UserContextProvidor><Profile /><login /></UserContextProvidor>

    // The childern are the component inside the providor, it means that pass the variable of providor to all it's children
    // We can name it children or anything else


    // in the return of above UserContextProvider we have wrap the children in UserContext,
    // But just writing UserContext will not be enough,
    // We have to add the provider key too as. <UserContext.Provider>{children}</UserContext.Provider>

    // As we have used the provider above but we have pass any data which should be provided by the provider 
    // hence we have add some data to the provider using the value prop,
    // I can put all the data in object and pass it to the value prop as <UserContext.Provider value={{user, setUser}}>


// Third Accessing the value from context provider
    // we can use the context in App.js or main.js
    // but we will use it in App.js. after importing we can wrap everything with <UserContextProvider></UserContextProvider> in the return section of App.js
    // At the result we will have access to all the data provided by the context provider to the child components of <UserContextProvider></UserContextProvider>
    
    // OR we can use the other way of using context provider 
    // where we can use context provider as <UserContext.Provider value={{user, setUser}}></UserContext.Provider> inside the return section of App.js/main.js as well



// Fourth, using the value provided by context provider. 
    // We have to create Login and Profile components and check accessability of provided data by the provider
