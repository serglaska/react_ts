import React, { useRef } from 'react';
import { ToDoCallback } from '../modules';
import './NewTodo.css';
///////////////////////////////////////////

export const NewTodo: React.FC<ToDoCallback> = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const value: string = inputRef.current!.value;
    props.addToDo(value);
    inputRef.current!.value = '';
  }

  return <form onSubmit={todoSubmitHandler} className='form-control'>
    <div>
      <label htmlFor='todo-text'>
        WTF label
      </label>
      <input type='text' ref={inputRef} id='todo-text'>
      </input>
    </div>
    <button type='submit'>
      Add new ToDo
    </button>
  </form>
};
