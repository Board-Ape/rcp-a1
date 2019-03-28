import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input 
        type='text'
        className='input'
        value={props.input}
        onChange={props.handleChange}
      />
    </div>
  )
};

export default userInput;
