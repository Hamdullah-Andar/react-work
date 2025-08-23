import Example from "./example";

function Explanation03(){
    return(
        <>
        
            <h2>Analysis of index.html</h2>

            <p>We see noscript tag which tell the user if JavaScript is disabled in his browser, show him the message which is inside the noscript tag<br />

            We have an empty div with id root, no JavaScript is injectd here<br />

            Going back to index.js which is the entry point of our react application, the index.js can be named anything like ahmad.js, main.js etc<br />

            We have imported below two library in index.js which is used for web DOM manuipultiaon</p>

            <ul>
                <li>react (which is core foundational library, which is responsible for taking reference etc)</li>
                <li>react-dom is implementation of React for web, as react-native is react implementation for mobile App</li>
            </ul>

            <p>As we have DOM in web, react create it's own DOM which is called virtual DOM, then the react DOM is compared with main DOM and then see the differences and change only those element which is required in Main DOM<br />
            DOM is a tree structure<br />
            React creates it own DOM, there is a method in React DOM which is called createRoot<br />
            Where to Create root, createRoot takes a paramter where it create root of DOM and that element is the empty dev in index.html which is selected by Id, and store it reference in root variable<br />
            then tell the root variable to render, render what ever we pass you as aparameter<br />
            first take react StrictMode, which is used in developemnt, we can remove it too, but it is good to keep strictMode, and then render App, which is not an element/tag but JSX<br/>
            React give us the Power of render html through JavaScript using JSX<br />
            JSX very much look like html, we can assume a kind of creating custom tags</p>


            <p>What is that App tag, let go App.js and check it</p>
            <h2>Comming back to App.js</h2>
            <p>App is a function which return html, and we export it <br />
            React says take a function, and return html from it, i'll render html, we render App, App render html<br />
            acutally we are writing html through JavaScript<br />
            it means we have programmting capability in html, which was not available earlier</p>

            <h2>Question: As we have not inject our JavaScript to html, how does it renders</h2>
            <p>As we have react-scripts in dependecies of package.json file which is responbile for loading indes.js or main.js to index.html <br />
            When you right click and click on "view page source" you will see "<script defer src="/static/js/bundle.js"></script>" which is added by react-scripts<br />

            when you inspect you will see so many scripts added by react-scripts</p>


            <p>We can create component, which must have .js file extention, and component name must be capitalized as below</p>
            
            <Example />

            <h2>We have to keep our function name capitalized</h2>
            <h2>Keeping file name capitalized is also good practice, but it will not give you error, if it is not capitalized</h2>
            <p>Writing file name with extention is not required, sometime it will added automatically</p>
            <p>In project created using vite, we have to give file extention as jsx, but in project created using create-react-app we can give file extention just .js, we can use .jsx extention also</p>
            <p>We can also give .js file extention to a component in react project created using create-react-app</p>
            <p>It is convition in project created using create-react-app that we should give file extention as .jsx when we are returning JSX, and use .js file extention when returning just JavaScript</p>
            <p>using vite, file name should be .jsx, and use capitalized function or component name</p>

        </>
    )
}

export default Explanation03;