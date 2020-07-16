import React from 'react';
import { TodoListProps } from '../interfaces/TodoListProps';

export const TodoList: React.FC<TodoListProps> = ({
  todos, selectedFilter, onToggle, onRemove,
}) => {
  const showItems = (filter: string) => {
    if (filter === 'all') {
      return todos;
    }

    if (filter === 'active') {
      todos = todos.filter(todo => todo.completed === false);
    }

    if (filter === 'completed') {
      todos = todos.filter(todo => todo.completed === true);
    }

    return null;
  };

  showItems(selectedFilter);

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];

        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span className="todo-title">{todo.title}</span>
              <i className="material-icons grey-text" onClick={() => onRemove(todo.id)}>
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
