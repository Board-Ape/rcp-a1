import React from 'react';

const card = (props) => {
    return props.todos.map(todo => {
        return(
            <div>
                {todo}
            </div>
        )
    })
}

export default card;