import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/*The <App /> component is being used making main.jsx the entry point for our app */
import './index.css'
// an array of objects, each obj representing a different task
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
// React is rendering our tasks out of an array called DATA and it keeps track of the order of the array of tasks based on the inputed order
// To make it easier to access the array, we may use the key prop which will be passed to our <Todo/> component in the App.jsx file
ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  - creating a root component in the element with root 'id', in this case the <div> element in index.html with the id="root"
  - the createRoot function defines or initialize the root component/node of our application 
  - takes as an argument the DOM element inside which we want our React app to be rendered
  - in this case we want the DOM element with an ID of 'root' which 
  - we can call the render() method onto the createRoot() call
  */
  <React.StrictMode>
    <App subject="Andy" greeting="How are you?" tasks={DATA} />
    {/*
    - props are like attributes but for React components only 
    - In React, the flow of data is unidirectional: props can only be passed from parent components down to child components
     */}
  </React.StrictMode>,
  /*
  - we then pass in the JSX expression that we want to render inside our root
  by writing <App /> as the JSX expression
  - we are telling React to call the App() function which renders the App component inside the root node
  - <App /> is rendered inside a speical <React.StrictMode> component which helps catch potentail problems with the code
   */
)

