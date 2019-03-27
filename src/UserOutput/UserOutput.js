import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>First User Output Paragraph</p>
            <p>{props.content}</p>
        </div>
    )
}

export default userOutput;