import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('afn')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  // we fetch the data using useCurrencyInfo custom hook, only when From section of currency gets change
  // the To section just read the data which is fetch base on the From currency, which gives us all the value of exchange base on From currency
  // and we select one of the value in To section to show it's rate
  // makes it crystal clear why From = fetch new board and To = just read a line.

  const options = Object.keys(currencyInfo)

  const swap = () => {      
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
      >
           <div className="w-[50%] h-full bg-cover bg-amber-400" 
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/19266676/pexels-photo-19266676.jpeg')`,
            }}>
          </div>
          <div className="w-[50%]">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                        {/* you’re not really putting components inside the form. You’re putting the DOM they return inside the form. */}
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                            //   onCurrencyChange={(currency) => setAmount(amount)}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                          {/* 📌 Note on Components Inside a Form in React
                            When you place a React component inside a <form>, you are not actually putting the component itself into the form. Instead, React calls that component function, and whatever JSX (DOM elements) it returns is what gets rendered inside the form.
                            So, it’s more accurate to say:
                            We’re adding the DOM output of the component to the form, not the component itself.
                            This is not unique to forms—the same thing happens wherever you use a component in React. Components are just functions (or classes) that return UI. Their rendered output is what gets placed in the parent’s structure. */}
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
       
      </div>
  );
}

export default App
