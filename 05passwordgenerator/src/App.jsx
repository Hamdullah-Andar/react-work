import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  // How to Aproach
  // we have to store the length, numberAllowed, characterAllowed, password, in a useState
  // we have to create a function for generating a password, for generating a password we have to use useCallback hook
  // syntax useCallback(fn, dependenciesArray)
  // useCallback memorize the function, fully or partially
  // we will pass length, numberAllowed, characterAllowed, password, setPassword, and save it's reference in passwordGenerator
  // inside the passwordGenerator we have pass and str variables
  // we will create an if condition, if true we will add 0-9 number to str
  // we will create an if condition, if true we will add !-` characters
  // we will create a for loop and assign the random character to pass

  
  // we call the passwordGenerator before the return statement, but we got too many render error, as we have used useCallback
  // we have to call passwordGenerator inside useEffect hook
  
  // we have used useCallback for memoization, optimization and keep it in cache
  // we have used useEffect for re-render, on first time load of the page, or any changes happen in the dependency array
  
  // in JSX we add a heading and a div, an input inside the div
  // in JSX we add another div, which has three div inside it, and each div has an input in it

  // when we want to take reference of something, we use useRef hook
  // we use useRef hook for copying the password

  // in react we can access to window object, as react will be compile to JavaScript and where javascript run we have access to window, but we don't have access to window when we use nextJS in server side render pages
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const [hover, setHover] = useState();

  const passwordRef = useRef(null)
  // using the passwordRef we can get more details, to represent it to the user for better experience

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // it select the passwordRef value
    passwordRef.current?.setSelectionRange(0, 9)
    // it select the range of passwordRef value ex (0, 9) 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={`${hover ? "bg-blue-500" : "bg-blue-700"} outline-none text-white px-3 py-0.5 shrink-0`}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
