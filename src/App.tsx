import React, { useState, useEffect } from 'react';
import { TodoForm } from './componetns/TodoForm';
import { TodoList } from './componetns/TodoList';
import { TodoProps } from './interfaces/TodoProps';
import { TodoFilter } from './componetns/TodoFilter';
import { colorList } from './api/colors';
import './index.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [filter, setFilter] = useState<string>('all');
  let [color, setColor] = useState<string>('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as TodoProps[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    if (title.trim().length) {
      const newTodo: TodoProps = {
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

    setColor(randomColor[0]);
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => todo.completed === false));
  };

  const selectedFilter = (filterSelected: string) => {
    setFilter(filterSelected);
  };

  return (
    <div className="app-wrapper" style={{ backgroundColor: color }}>
      <div className="app-container">
        <h1>todos</h1>
        <TodoForm
          onAdd={addHandler}
          backgroundChanger={backgroundChanger}
        />
        <TodoList
          todos={todos}
          selectedFilter={filter}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
        {todos.length
          ? (
            <TodoFilter
              todos={todos}
              onFilter={selectedFilter}
              onClear={clearCompleted}
            />
          )
          : <></>}
      </div>
    </div>
  );
};

export default App;
