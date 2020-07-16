import React from 'react';
import { Todo } from '../interfaces/Todo';

interface Props{
  todos: Todo[];
  onFilter(shown: string): void;
  onClear(): void;
}

export const TodoFilter: React.FC<Props> = ({ todos, onFilter, onClear }) => (
  <footer className="footer">
    <span className="todo-count">
      {`${todos.filter(todo => todo.completed === false).length} items left`}
    </span>
    <ul className="filters">
      <li>
        <button
          onClick={() => onFilter('all')}
          type="button"
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => onFilter('active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => onFilter('completed')}
          type="button"
        >
          Completed
        </button>
      </li>
    </ul>
    <button
      type="button"
      className="clear-completed"
      onClick={onClear}
    >
      Clear completed
    </button>
  </footer>
);
