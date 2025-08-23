function Explanation01(){
    return(
        <>
            <h1>Web Development/React is platform independent, we can do it in windows, linux, mac ...</h1>
            <p>We need a Editor to write our code and a browser to run our code<br />
            Editor: VS Code <br />
            Browser: Chrome</p>

            <h2>We need to install Node JS</h2>
                <p>As JavaScript run in a browser only, Node JS gives us the environment where we can run JavaScript<br />
                as we need a compiler for every programming language, we need Node JS as a compiler/interpreter for JavaScript program<br />
                React Documentation link: <a href='https://react.dev'>Rect Documentation</a><br />
                nove -v will show us a our node version</p>
            
            <h2>Create github Repository</h2>
                <p>Create a github repository without readme file<br />
                Run below commands in vscode</p>
                <ul>
                    
                    <li>echo "# react-work" >> README.md</li>
                    <li>git init</li>
                    <li>git add README.md</li>
                    <li>git commit -m "first commit"</li>
                    <li>git branch -M main (it change the branch from master to main overriding file name)</li> 
                    <li>git remote add origin git@github.com:Hamdullah-Andar/react-work.git</li>
                    <li>git push -u origin main</li>
                    
                </ul>

                <h2>Vite and Parcel are bundler which combine all JavaScript file and gives us single using which we can do our work</h2>
            
            <ul>
                <li>We have core react library, and we will have below attachment to it too</li>
                <li>and we react-dom</li>
                <li>nad we react-native</li>
            </ul>

            <p>if we want to work on Web we will take react and react-dom<br />
            if we want to work on mobile we will take react and react-native</p>
            
            <h2>to Create react project we will follow one of two way</h2>
            <ul>
                <li>using npx</li>
                <li>when we install node we get a package call npm, node package manager</li>
                <li>npm it allows us to install library in node, we have installer in all language </li>
                <li>if we don't want to install a package rather execute it directly, we get another edition called npx (Node package executer)</li>
                <li>create-react-app is a utility or software through which we can create project</li>
                <li>and we write the name of the project after it, as below</li>
                <li>npx create-react-app 01basicreat</li>
                <li>Creating react project using "npx create-react-app 01basicreat", is heavy, as it is bulky utility, hence we get big bundle and we get thing we don't use it, and apckage size are also big</li>
            </ul>

            <h2>Vite and Parecel are alos utilities</h2>
            <p>It is recommended to use Vite and Parcel for creating project</p>

            <h2>React Project file Structure</h2>
            <p>below are the different file structure in react project</p>
            
            <h3>package.json</h3>
            <p>Where we get below things</p>
            <ul>
                <li>name of the project</li>
                <li>version of project</li>
                <li>dependencies
                <ol>react</ol>
                <ol>react-dom</ol>
                <ol>we get some testing library (jest) too, which is not required, but it is give</ol>
                <ol>react-scripts</ol>
                <ol>web-vitals, which check our application performance</ol>
                </li>
                <li>scripts run the project and make it ready for production
                <ol>start, give us development environment</ol>
                <ol>build, when we want to make our project ready for production we use build</ol>
                <ol>test, are used for running tests cases for the project</ol>
                <ol>eject, when want to eject from react and want to use another framwork or library</ol>
                </li>
            </ul>

            <h2>Linting is used for giving us suggestion, using a swiggly line, which tells us that you can do even better</h2>

            <h2>We get brower list, which tell the project on which browser the project will run</h2>

            <h2>To run the project we use below command</h2>
            <p>we should list the file inside the projec and make sure we have are in the folder where we have package.json file and run below command<br />
            npm run start or npm start<br />
            use run as there is some exception in using directly start</p>

            <h2>When we right click and click on page source, we don't thing that shows in our page, hence it will not perform good on SEO</h2>

            <h2>Run Build command as below</h2>
            <p>npm run build<br />
            After running build command, we will get a build folder<br />
            where we get all static assets, all JavaScript files in a converted form, and this build file will be served in production</p>
            

            <h2>Clean Up Project, which have some Extra file at the begining</h2>

            <p>Ignore build file, if you have already build your project, as it is one time generated<br />

            Every React project has an readme file, you can update it<br />

            Most of the time we will work in src folder<br />

            We will remove unnecessary file from src folder, we will remove below file</p>
            <ul>
                <li>setupTests.js</li>
                <li>reportWebVitals.js (which track our application performance)</li>
                <li>logo.svg</li>
                <li>App.test.js</li>
                <li>App.css</li>
                <li>index.css</li>
            </ul>

        </>
    )
}

export default Explanation01