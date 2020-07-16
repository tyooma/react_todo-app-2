import React, { useRef } from 'react';
import { TodoFormProps } from '../interfaces/TodoFormProps';

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
      props.backgroundChanger();
    }
  };

  return (
    <div className="input-field">
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
