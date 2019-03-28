import React from 'react';
import './Card.css'

const card = (props) => {
    return props.todos.map((todo, key) => {
        return (
          <div className="todo" key={key}>
            <p contentEditable>{todo}</p>
            <button onClick={(event) => props.delete(event, key)}>X</button>
          </div>
        );
    })
}

export default card;