
// useCurrencyInfo is a custom hook
// hook take optional data
// but useCurrencyInfo take currency all the time, it is not optional

import { useEffect, useState } from "react";


function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    // we want to use a hook which call the API, when this useCurrencyInfo gets called/triggered that is useEffect()
    useEffect(() => {
        // The data we recieve in the result of API Request is mostly in String Format, we have to convert it JSON format, but react Query handles it by default
        // in first .then the data is converted to json format using the json() provided by the Response object
        // first .then return the promise to second .then and hold it in a variable
        // if we store it in a normal/regular variable it will not get updated in the UI, 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data)
    }, [currency])
    // console.log(data)
    return data
}

export default useCurrencyInfo;