import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    console.log("This is data from useLoaderData : ", data)
    // const [data, setData] = useState([])
    // // useEffect will run when the Github Component is loaded 
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hamdullah-andar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    // Optimization which fetch above data when we about to load the Github component which fech the data

    // there is another optimaization which was used by NextJs, we have it in React Router too
    // this optimaization is used in <Route></Route> which is called loader 
    // when we want to fetch some data from the database we can directly fetch it inside the <Route></Route> too
    // at the result when we are about to load the Github component on the route where we have loader, the data gets fetch and it is kept in the cache too
    // Enen the data start fetching before the fetch inside useEffect of the component which loads

    // to load the data we have to import useLoaderData method from react-router-dom
    // Calling the useLoaderData return us the data we have fetched in githubInfoLoader and store it in data variable as above

    // And we have to pass githubInfoLoader to the <Route></Route> where we want to have the feature of fetching data when the Github componet is about to load
  
    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
        <div className='flex justify-center'>
            <img src={data.avatar_url} alt="Github Image" width='150px' />
        </div>
    </div>
  )
}

export default Github

// Writing below function in a separate file is good practice
// We can write it here as well, and pass it to the <Route></Route> which call this (Github) component

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hamdullah-andar')
    // response is the promise returned by the fetch
    // we can directly return the promise 
    // As the response return from fetch is in Sting format, we can convert it to json() as below and return it
    return response.json()
}

// Note from AI about loader in <Route>

// ✅ What you got right:
// loader={githubInfoLoader} runs before the <Github /> component renders.
// You can then grab the data in <Github /> using useLoaderData().
// Returning response.json() is correct since fetch returns a Response object, not the parsed data.
// This avoids redundant API calls inside the component and optimizes fetching.

// ⚡ A couple of tweaks to your comments:
// Loader doesn’t fetch data “on hover” — it fetches when the route is about to load (preloading can happen if you use Link with React Router, but it’s not hover-specific).
// response.json() itself is already a promise, but React Router understands async loaders, so returning it works fine.
// 👉 So your concept is clear — just adjust the “hover” part and be precise that loader executes before rendering the component, not specifically on hover.

// updated the sentance of fetching data on hover when using loader in route 