import { TodoProps } from './TodoProps';

export interface TodoListProps {
  todos: TodoProps[];
  selectedFilter: string;
  onToggle(id: number): void;
  onRemove(id: number): void;
}
