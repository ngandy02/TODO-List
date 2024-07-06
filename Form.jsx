import { useState } from "react";
//importing a 'useState' function from react 

function Form(props){
    //now the function Form() takes in an 'object' called props which has attributes
    const [name, setName] = useState("");
        // What are we doing above?
            // defining 'name' variable which represents the value in the textbox (initially empty)
            // Defining a function called 'setName()' whose job is to modify the 'name' state 
            // 'useState()' returns these two things in an array, so we are using 'array destructuring' to capture them both in 2 separate variables
        // above we have used a hook imported from the React module to create state called 'name'
        // REMEMBER 'useState()' returns an array with 2 items
        
    function handleSubmit(event){
        event.preventDefault();
        //call the preventDefault() function on the event labeled as "event"
        //preventDefault prevents the data to be automatically submitted and loaded to the value of the input 
        //has to manually assign the value to the value attribute of the input element to upload the valid inputted data
        props.addTask(name);
        // now we call the function that is stored in the prop, 'props.addTask' to finishing running the function
        // 'props.addTask()' is a callback function
        setName("");
        // call 'setName()' with an empty string to clear the input after form is submitted
    }

    function handleChange(event){ //takes in the event object
       setName(event.target.value); // reads the text inside the input by reading the event object -> its target property (element that triggered the change event -> and then the value inside the target property which is the user's keystroke)
        //'setName()' function will allow user's keystrokes will fill out the input textbox
    }
    return(
        <form onSubmit={handleSubmit}>
            {/* add an 'onSubmit attribute to the <form> element and set its value to the handleSubmit function */}
            {/* the 'onSubmit' attribute/event handler property detects for when the user clicks on the submit 'Add' button, and prints out an alert message "Say Hello!" */}
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            {/* 'htmlFor' is used to associate a LABEL with a form element, particularly an INPUT element */}
            {/* this association tells screen readers that the label is associated with the input field, improving accessibility */}
            {/* when a users clicks on the label, it focuses or activate the associated input element */}
            What needs to be done?
          </label>
        </h2>
        <input  
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
            // value is equal to the state 'name'
            // the value will be printed out in the textbox
          onChange={handleChange}
            // onChange is an attribute/event handler property that detects for typing in the input textbox
            // if the user starts typing in the textbox, then the browser will react to it logging "typing" to the JS console
            // so we know our event listener is attached to the input
            // enables the textbox to be filled out when user is typing
          
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
        {/* when this button is pressed or clicked, then the 'onSubmit' attribute/event handler property will detect 
        that the user has clicked the button with type="submit" and execute the function "handleSubmit" */}
      </form>
    );
}

export default Form;