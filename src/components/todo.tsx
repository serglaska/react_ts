import React from 'react';
import { ToDoItems } from '../modules';
import './TodoList.css';
////////////////////////////////////////

export const ToDoList: React.FC<ToDoItems> = (props) => (
  <ul>
    {
      props.items.map(
        (el, index) => <li key={index}>
          <span>
            {el.title}
            <button onClick={props.deleteItem.bind(null, el.id)}>
              Delete Item
            </button>
          </span>
        </li>
      )
    }
  </ul>
);
