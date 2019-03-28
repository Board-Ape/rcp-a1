import React from "react";
import Card from '../Card/Card';

const userOutput = (props) => {
    return (
        <div>
            <button onClick={props.handleSubmit}>Submit To Do</button>
            <h1>{props.input}</h1>
            <Card todos={props.todos} delete={props.delete}/>
        </div>
    )
};

export default userOutput;
