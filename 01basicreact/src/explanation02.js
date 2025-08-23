function Explanation02(){
    return(
        <>
            <p>currently we have two files in our src folder</p>
            <ul>
                <li>index.js</li>
                <li>App.js</li>
            </ul>

            <p>Remove the comments and reportWebVitals of index.js<br />
            Remove below imports</p>
            <ul>
                <li>reportWebVitals</li>
                <li>index.css</li>
            </ul>

            <p>Remove below imports in App.js</p>
            <ul>
                <li>logo.svg</li>
                <li>App.css</li>
            </ul>

            <p>Remove the div inside return of App.js and write an h1 tag, and write a message in it</p>

            <h1>Chai Aur React</h1>

            <p>Currently we have a function in App.js, which return an h1, and it is exported as "export default App"<br />
            And it is imported in index.js and use as App which in JSX<br />

            let go to 01basicreact, and run it using below command<br />
            npm run start</p>

            <p>The best to practice is make change in a project</p>
            
            
            <h2>About public Folder</h2>

            <p>Understanding the flow of how react in injected to our html in react project is very important<br />

            when we want to run javascript in html we have inject it to html using script tag, there is no other way<br />

            the main functionality in react project is in src folder and public folder<br />

            in public folder we have below file which is not very much necessory to have in our, if we have or don't have them the project runs</p>

                <ul>
                <li>favicon.ico</li>
                <li>logo192.png</li>
                <li>logo512.png</li>
                <li>manifest.json (when we open our website in mobile sometime meta tags are taken from manifest.json)</li>
                <li>robots.txt (is used for seach engine)</li>
                </ul>
            
            

            <p>But in public folder the most importatnt file is index.html
            it is very important, we must have it <br />


            it is the main page which load, Every thing happen inside this index.html. hence it is called Single Page Application SPA<br />

            DOM bring button, slider, image ... to index.html<br />

            using DOM we can hide or show items in a page, we can switch between pages<br />

            remove the comment inside html</p>


        </>
    )
}

export default Explanation02;