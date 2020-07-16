import { TodoProps } from './TodoProps';

export interface TodoFilterProps{
  todos: TodoProps[];
  onFilter(filter: string): void;
  onClear(): void;
}
