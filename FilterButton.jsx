function FilterButton(){
    return(
       <button type="button" className="btn toggle-btn" aria-pressed="true">
        {/* 
        aria-pressed attribute:
        - aria-pressed tells assistive technology that the button can be in one of two state: pressed or unpressed 
        - Setting a value of "true" means that the button is pressed by default
        - has a value of "true" because aria-pressed is not a true boolean attribute in the way defaultChecked is
        */} 
        <span className="visually-hidden">Show </span>
        {/* the 'span' element includes a space in between Show and all */}
        {/* 
        - the class visually-hidden has no effect yet, because we have not included any CSS
        - once we have put our styles in place, any element with this class will be hidden from sighted users and still availabe to assistive trechnology users
        */}
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
}

export default FilterButton;