import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

// Environment Variables
// react is a front end library, what ever we use here will be converted to javascript and will be visible on the browser 

// if we use unique client Ids, secrets, id and password directly in react code, it will be visible to everyone on the browser, so we should not use them directly in react code
// some variable should be make as system variable and use them in react code, so that they will not be visible on the browser

// way of storing those variables are different in different library and framework, while deploying the project in production in any system like vercel, netlify, heroku etc. they have their own secret manager to store those variables, we have to use the same variable which we have used in our code

// so we have to keep the envoirement variable in a separate File. in production it will be in separte file too that it will not be visible to everyone

// each framework and library has their own way of storing the enviroment variable
// the enviroment variable should be kept in the root folder of the project

// create a file named .env in the root folder of the project. 
// Readme.md, package.json are in the root folder of our project 
// App.jsx in in src folder, not in root folder

// project created with vite, so we have to use VITE_ before the variable name
// if we use create react app, we have to use REACT_APP_ before the variable name

// we should not push the .env file to github or any other public repository, because it may contain some sensitive information like api keys, client id, secret etc. so we have to add .env file in .gitignore file

// we or another developer may also need to have a record of those enironment variable without it's value, 
// so we can create a file named .env.example in the root folder of the project and keep the variable name there without value, so that anyone can copy the file and create their own .env file with their own value
// it will be helpful for another developer to know which variable is needed to run the project
// .env.example file should be pushed to github or any other public repository

// we can access envirnment variable in our code by using process.env.VITE_VARIABLE_NAME or import.meta.env.VITE_VARIABLE_NAME
// in a react project created with create-react-app we have to use process.env.REACT_APP_VARIABLE_NAME
// in a react project created with vite we have to use import.meta.env.VITE_VARIABLE_NAME

// environment variable is accessed differently in different library and framework, even frontend and backend also have different way of accessing the environment variable

// we may sometime need to restart the development server to reflect the changes made in the .env file

// if we try to write and access environemnt variable in a vite project as of create-react-app style we will get process is not defined error

// we have to check the documentation of the library and framework we are using to know the way of storing and accessing the environment variable

// We can write an environment variable in lowercase too 
// but writing in uppercase is good idea, as it will spot quicker in a large file 

// After creating account in AppWrite using github, 
// we should create project and copy the endpoint and project id and paste it in the .env file
// then we should create database and use database id in .env file, we can create multiple databases
// then we should create a collection/table and use collection/table id in .env file 

// After adding collectin id to the .env File, we have to go to the settings of the created collection and add users permissions of accessing the table which include (create, Read, Update, DELETE) 
// we will select all users, and add (CREATE, READ, UPDATE, DELETE) permission of the table and click on update
// then only the user with access will have access to the collection,
// if we don't add user permission to a table, no one will access the table data

// then we have to create attributes/columns in the created collection 
// After clicking on the create column, we have to add the Key as title, Type as String, Size as 255, required as check
// We can add default value, and click on create

// we will add the content column as well, key as content, Type as String, size as 255, required as check
// we will add the featured Image column as well, key as featuredImage, Type as String, size as 255, required as check
// we will add the status column as well, key as status, Type as String, size as 255
// we will add the user id column as well, key as userId, Type as String, size as 255, required as check

// we will go to index tab of collection/table 
// Click on Create Index, key as status, key as key, attributes should be selected from the dropdown, which are collectio/table columns, keep the order as ASC, 
// we can add more attributes too from add column option, but currently we will not add anymore, and click on create will create an index

// we have to creat bucket from the storage sidebar
// click on create bucket, and name it as images, and click on create, the bucket will be created
// copy the bucket id and paste it in .env file 

// we have add bucket permission, which users can access the bucket
// After adding bucket id to the .env File, we have to go to the settings of the created bucket and add users permissions of accessing the table which include (create, Read, Update, DELETE) 
// we will select all users, and add (CREATE, READ, UPDATE, DELETE) permission of the bucket and click on update

// Thier is another way of accessing environment variable then accessing directly from .env file as (import.meta.env.VITE_APPWRITE_URL)
// Which is creating the config or conf folder and config or conf file inside it 
// Where we put all the environment variable in an object and export it
