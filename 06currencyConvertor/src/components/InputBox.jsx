import React, { useId } from 'react'

// We are using this (InputBox) component to be reused, hence we are accepting many value as props 

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false, 
    currencyDisable = false,
    className = "",
}) {

    // when we have many values like currency, we can use useId hook to create separate id for each currency which avoid accessability while mapping them
    // we have to bind the label with it's input
    // we should not use useId hook for generating key in a list
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* The className value for the tailwind classes are written above in JavaScript {} and backTick ``, because of adding the className to the list of classes whihc is passed to InputBox as props */}
            {/* but below is classes are written as a string, as we don't use an variable below */}
            <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // As we have onChange on every input, hence when changing the input the result should be reflected in other part of the component 
                    // and that onAmountChange function which is passed in props, should be used for changing the amount
                    // We can use && after the onAmountChange to check it's availability first and then use the onAmountChange after the &&
                    // JavaScript takes data in sting format inside an Event, sometime identifying and solving this bug takes much time
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // currency will have selectCurrency value to show
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => ( // we have to map on currency values
                    // while looping on currencyOptions, we have to add a key, as it improve the performance, avoiding key will degrade the performance
                    // we can use any unique value as key, id, index or any other unique value like currency
                        <option key={currency}>
                            {currency}
                        </option>
                    ))}
                    
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


// Passing Functions/Setters as Props in React

// When you pass a function (like a setState setter) from a parent to a child, the child can call it to send data/events back to the parent.

// The parent owns the actual state, so when the function runs, it updates the parent’s state.

// React re-renders the parent with the new state, and the updated props flow down to children automatically.

// This creates a unidirectional data flow:
// Parent (state) ➝ passes props ➝ Child ➝ triggers callback ➝ Parent updates state ➝ re-renders ➝ Child receives new props.