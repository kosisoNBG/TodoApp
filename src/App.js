import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TransitionGroup>
        {todos.map((todo, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="fade"
          >
            <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
