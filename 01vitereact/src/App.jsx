import Example from "./example"


function App() {

  // as we have understood that the x is html part in jsx, but how we can pass variable in jsx
  const username = "test variable"

  return (
    <>

      <h1>Hello from React | Vite {username}</h1> 
      {/* we can use {} to pass variable in jsx, this is called evaluate expression, we can use the final outcome of javaScript, not if for and other, we can if loop an other above the return */}

      {/* <h1>Creating Project Using Vite</h1>
        <p>Vite is a bundler</p>
        <p>As we have used npx while creating project using create-react-app, but when we are trying to create project using vite we use npm</p>
        <p>The command to creat project using vite is as below</p>
        <p>npm create vite@latest</p>

        <p>create in above command is utility</p>
        <p>writting @latest and the end is optional, if we write @latest it will create using the latest version of vite</p>

        <p>The project name will be ask, write the name and hit enter</p>

        <p>Select React and hit Enter</p>
        <p>Select JavaScritp and hit Enter</p>

        <p>Project is ready</p>

        <p>The rest of the proccess is the same as creating react project using "npx create-react-app app-name" command</p>

        <p>In package.json file we will have dev instead of start of project created using "npx create-react-app app-name"</p>

        <p>In dependencies we will get reat and react-dom only as these two are required currently</p>

        <p>devDependencies are used in developement mode only, it does not go to production level</p>


        <p>As we don't get node_modules here,</p>
        <p>we need to install the dependencies, we can do it using below command</p>
        <p>npm i</p>

        <p>Run react created project with vite using below command</p>
        <p>npm run dev</p>


        <h2>Clean up react project created using vite</h2>

        <p>Remove below files in react project created using vite</p>

        <ul>
          <li>assets folder</li>
          <li>App.css</li>
          <li>index.css</li>
        </ul>

        <p>We are left with App.jsx and main.jsx</p>

        <p>As we had App.js and index.js in react project created with "npx create-react-app app-name"</p>

        <p>All these different name are because of library, we can have file with different name in different project, but in framework we should the same name in all project, adding differnet file name (other than assign file names) will crash the project</p>

        <p>Remove below imports from main.jsx</p>
        <ul>
          <li>index.css</li>
        </ul>

        <p>After cleaning up main.jsx we will get very similar structure as the index.js file of the project we created using "npx create-react-app app-name"</p>


        <p>Remove below imports inside App.jsx</p>
        <ul>
          <li>useState</li>
          <li>reactLogo</li>
          <li>viteLogo</li>
          <li>App.css</li>
        </ul>

        <p>Remove everything in the return section of App.jsx, and write an h1 with a message as below</p>

        <h1>This is reat project created with vite</h1>

        <p>And run with below command</p>
        <p>npm run dev</p>

        <h2>How JavaScript is injected to Our index.html</h2>
        <p>When we check package.json file, we can see only, react and react-dom dependencies, but not react-scripts</p>
        <p>So how the main.js or index.js in injected to our index.html</p>

        <p>While creating react project with create-react-app, the index.html file is kept inside public folder</p>
        <p>But the project created with vite the index.html file is kept in the project folder, outside src and public folder</p>

        <p>if we check inside that index.html we can that script in inlcuded there directly, as "    <script type="module" src="/src/main.jsx"></script>"</p>

        <p>As we have seen there is no much difference between the react project create create-react-app and vite@latest</p>

        <p>inside the main.jsx of vite the reference of virtula DOM is stored in variable but in project created with creat-react-app it is store in a variable</p>
    
        <p>we care remove the strictMode as well inside project created using vite</p>

        <h2>As we can see App is a function which return html, which is given to main.jsx to render it, can i do similar work of creating a function and give it App to be render</h2>

        <p>Yes we can create a function or component and import it inside the App will send to main.jsx to render as below example</p> */}

        <Example />

        {/* <p>If we trying to return multiple html tag and components from App.jsx, we will get an error</p>
        <p>If we include it in a div or fragment <></>, we won't get an error</p>
        <p>the componet must have extention on .jsx, and the name should be capitalized in react project created using vite</p> */}

    </>
  )
}

export default App
