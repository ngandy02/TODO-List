function Todo(props) {
    console.log(props);
    return (
        <li className="todo stack-small">
        {/* an item on the list which start on a new line (block-level element)  */}
        <div className="c-cb">
          {/* <div> element is used to group the list element together, each with a checkbox button and two buttons below to edit and delete */}
          <input id={props.id} type="checkbox" defaultChecked={props.completed} />
          {/* if the input element has a name attribute, the name attribute is normally used to distinguish the checkboxes and store their respective inputted or submitted form data*/}
          {/* id has to be unique, if not the functionality of label elements can break */}
          <label className="todo-label" htmlFor={props.id}>
            {/* the htmlFor is assigned the id attribute of the input */}
            {props.name}
            {/* props.name is a JSX expression, so you'll need to wrap it in curly braces */}
          </label>
          {/* 
          defaultChecked attribute:
          - tells React to check this checkbox initially 
          - a boolean attribute
          - true if it's present and false if it's absent
          - assignment on the right-hand side of the expression is optional
          - can explicitly set its value by passing it in curly braces
            - examples:
            1) defaultChecked = {true}
            2) defaultChecked = {false}
          
          htmlFor attribute:
          - corresponds to the "for" attribute used in HTML
           */}
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
            {/* with the index.css file, the "Eat" word will be invisible on the user end and not visible on the website page due to the className */}
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
}

export default Todo;
