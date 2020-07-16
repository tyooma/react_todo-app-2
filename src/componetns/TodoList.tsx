import React from 'react';
import { Todo } from '../interfaces/Todo';

type Props = {
  todos: Todo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FC<Props> = ({ todos, onToggle, onRemove }) => {
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
