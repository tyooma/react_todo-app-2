import React, { useRef } from 'react';
import { TodoFormProps } from '../interfaces/TodoFormProps';

export const TodoForm: React.FC<TodoFormProps> = ({
  onAdd, backgroundChanger, checkAllHandler, color,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(ref.current!.value);
      ref.current!.value = '';
      backgroundChanger();
    }
  };

  return (
    <div className="input-field">
      <i
        className="material-icons expand-icon"
        onClick={() => checkAllHandler()}
        style={{ backgroundColor: color }}
      >
        expand_more
      </i>
      <input
        type="text"
        id="title"
        placeholder="What needs to be done?"
        ref={ref}
        onKeyPress={keyPressHandler}
        maxLength={100}
      />
    </div>
  );
};
