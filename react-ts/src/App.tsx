import React, { useState } from 'react';
// import { Counter } from "./components/Counter";
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


const initialTodos: Todo[] = [
  {
    text: 'Study React TypeScript',
    complete: false,
  },
  {
    text: 'Create Docker-Nginx',
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </div>
  );
};

export default App;
