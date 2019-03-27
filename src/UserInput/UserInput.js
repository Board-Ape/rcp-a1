import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="User Input"
                value={props.input}
                onChange={props.changeHandler}
            />
        </div>
    )
}

export default userInput;