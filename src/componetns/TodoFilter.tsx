import React from 'react';
import { TodoFilterProps } from '../interfaces/TodoFilterProps';

export const TodoFilter: React.FC<TodoFilterProps> = ({ todos, onFilter, onClear }) => (
  <footer className="footer">
    <span className="count">
      {`${todos.filter(todo => todo.completed === false).length} items left`}
    </span>
    <ul className="filters">
      <li>
        <button
          className="button"
          onClick={() => onFilter('all')}
          type="button"
        >
          All
        </button>
      </li>
      <li>
        <button
          className="button"
          type="button"
          onClick={() => onFilter('active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className="button"
          onClick={() => onFilter('completed')}
          type="button"
        >
          Completed
        </button>
      </li>
    </ul>
    <button
      type="button"
      className="clear-completed button"
      onClick={onClear}
    >
      Clear completed
    </button>
  </footer>
);
