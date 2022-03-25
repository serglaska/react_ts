import React, { useState } from 'react';
import { ToDoList } from './components/todo';
import { NewTodo } from './components/newTodo';
import { ToDo } from './modules';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  function addItemHandler(value: string) {
    console.log(value)
    setTodos(prevState => [...prevState, { id: Math.random().toString(), title: value }])
  }

  function deleteItemHandler(id: string) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <NewTodo addToDo={addItemHandler} />
      <ToDoList items={todos} deleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
