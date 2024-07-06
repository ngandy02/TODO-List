// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// /*above import line is called a side-effect import which doesn't import any value into the JavaScript file
// but tells Vite to add the referenced CSS file to final code output, so that it can be used in the browser */

// /* the JavaScript community prefers lower camel case like helloWorld 
// whereas the React components use Pascal case (or upper camel case) variable names, like HelloWorld */
// function App() {
//   /* returns a JSX expression. THe expression defines what your browser ultimately renders to the DOM */
//   const [count, setCount] = useState(0)

//   return (
//     /* - the fragment belows allows us to return a single JSX expression
//        - the the JSX espression defines what your browser ultimately renders to the DOM (Document Object Model)
//        - the DOM is the data representation of the objects that comprise the structure and content of a document on the web
//        - the DOM represents an HTML document in memoery and uses APIs to create web content and applications
//        - API (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate and interact with each other
//             - APIs act as a middle layer between a client and a server
//                 - Client being the front-end application that a user interacts with 
//                 - Server being responsible for back-end logic and database operations
//     */

//   /* 
//   - The '<>' or fragment allows us to return a single JSX element without rendering <div>'s in the browser
//    */

//    /*
//    - The <div> is a block-level HTML element, which means it starts on a new lines and takes up the entire available width by default 
//    - The <div> elements are commonly used to group related content together, such as a header, navigation menu, main content area, sidebar, and footer
//    - CSS styles can be applied to <div> elmeents using class names, IDs, or directly targeting the <div> element itself
//    */
//     <>
//       <div>
       
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Hello, World!</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// /*This export statement makes our App() function available to other modules */
// export default App


// import "./App.css";


// function App(props) {
//   /* Accepts props as a parameter  */
//   console.log(props);
//   /* log props to the console so you can inspect it */

//   return (
//     <>
//       <header>      
//         <h1>Hello, {props.subject}!</h1>
//         <h2>{props.greeting}</h2>
        
//         {/* 
//         {Hello, React :)!}
//         <h1>Hello, {subject + ' :)'}!</h1>
//         {Hello, REACT }
//         <h1>Hello, {subject.toUpperCase()}</h1>
//         {Hello, 4!}
//         <h1>Hello, {2 + 2}!</h1>
//         */}
//         <button type="button" className="primary">Click me!</button>
//       </header>
//     </>
//   );
// }

// export default App;


/*
In React:

Components can import modules they need and must export themselves at the bottom of their files.
Component functions are named with PascalCase.
You can render JavaScript expressions in JSX by putting them between curly braces, like {so}.
Some JSX attributes are different than HTML attributes so that they don't conflict with JavaScript reserved words. For example, class in HTML translates to className in JSX.
Props are written just like attributes inside component calls and are passed into components.
*/

/*
# Move into the src directory
cd src
# Delete the App.css file and the React logo provided by Vite
rm App.css assets/react.svg
# Empty the contents of App.jsx and index.css
echo -n > App.jsx && echo -n > index.css
# Move back up to the root of the project
cd ..
 */
import { useState } from "react" ;
// for the useState() hook
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
// imported the Todo component so we can replace all of the <li> elements in this jsx file with <Todo /> component calls

function App(props) {
  console.log(props);
  const [tasks, setTasks] = useState(props.tasks);
  // tasks is now an array that is equal to useState and holds the exact same objects
  // setTasks is a hook that provides the components with additional features
  const taskList = tasks?.map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      keys={task.id} 
      />
    ));
  // JavaScript gives us an array method for transforming items in the array into something else that we want
  // Array Method: Array.prototype.map() (can just ignore prototype)
  // The '?.' operator lets us perform "optional chaining" to check if props.tasks is undefined or null before attempting ot create a new array of task names
  // In taskList, we pass in the key prop to keep track of the order of the array and access it.
  // Key is a special prop that's managed by React and you CAN NOT use the word key for any other purpose
  // Since 'keys' should be unique, we are going to re-use the 'id' of each task object as its key
  function addTask(name){
    const newTask = {id: `todo-${nanoid()}`, name, completed: false };
    // above we are creating a newTask object to add to the 'tasks' arrray
    // the nanoid() will create unique IDs for our new tasks
    // the `${...}` syntax is a way to indicate the combination of string and value 
    setTasks([...tasks, newTask]);
    // above the setTasks hook contains a "SPREAD SYNTAX" to copy the existing array (ex: '...tasks')
    // newTask object is added after the spread syntax which is at the end of the tasks array
  }
  
  const tasksNoun = taskList.length
  const headingText = `${taskList.length} tasks remaining`;
      // the `${...}` syntax is a way to indicate the combination of string and value 


  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      {/* <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form> */}

      <Form addTask={addTask} />
        {/* We are passing 'addTask()' into <Form /> componenet as a prop so we can run the function based on values from the form component (from child to parent) */}
        {/* The prop above can be given any name instead of 'addTask' as long as it makes sense */}
      <div className="filters btn-group stack-exception">
        {/* <div> element is a block-level element, repreenting a generic container used to group and organize other elements */}
       <FilterButton />
       <FilterButton />
       <FilterButton />
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      {/* REMEMBER HEADING ELEMENTS ARE BLOCK-LEVEL ELEMENTS */}
      <ul 
      // the start of an unordered list which is a block-level element
        role="list"
        // the role attribute helps assistive technology explain what kind of element a tag represents 
        // A <ul> element is treated like a list by default, but the styles we're about to add will break that functionality 
        // the role above will restore the "list" meaning to the <ul> element
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {/* 
        - the aria-labelledby attribute tells assistive technologies that we're treating our list heading as the label that descirbes the purpose of the list beneath it
        - making this association gives the list a more informative context
         */}
        {/* <Todo name="Eat" id="todo-0" completed/> */}
        {/* completed is a boolean prop */}
        {/* <Todo name="Sleep" id="todo-1" />
        <Todo name="Repeat" id="todo-2" /> */}
        {taskList} 
        {/* taskList is where the list or array of <Todo /> components are stored */}
      </ul>
    </div>
  );
}

export default App;
