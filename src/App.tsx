import React, { useState, useEffect } from 'react';
import { TodoForm } from './componetns/TodoForm';
import { TodoList } from './componetns/TodoList';
import { Todo } from './interfaces/Todo';
import { TodoFilter } from './componetns/TodoFilter';
import { colorList } from './api/colors';
import './index.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  let [page, setColor] = useState<string>('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    if (title.trim().length) {
      const newTodo: Todo = {
        title,
        id: Date.now(),
        completed: false,
      };

      setTodos(prev => [newTodo, ...prev]);
    }
  };

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  };

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const backgroundChanger = () => {
    const colors = colorList;
    const randomColor = colors.sort(() => Math.random() - 0.5);

    setColor(page = randomColor[0]);

    return page;
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => todo.completed === false));
  };

  const filterTodos = (shown: string) => {
    if (shown === 'all') {
      return todos;
    }

    if (shown === 'active') {
      return todos.filter(todo => todo.completed === false);
    }

    if (shown === 'completed') {
      return todos.filter(todo => todo.completed === true);
    }

    return null;
  };

  return (
    <div className="app-wrapper" style={{ backgroundColor: page }}>
      <div className="app-container">
        <h1>todos</h1>
        <TodoForm
          onAdd={addHandler}
          backgroundChanger={backgroundChanger}
        />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
        {todos.length
          ? (
            <TodoFilter
              todos={todos}
              onFilter={filterTodos}
              onClear={clearCompleted}
            />
          )
          : <></>}
      </div>
    </div>
  );
};

export default App;
