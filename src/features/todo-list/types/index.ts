export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoFilter = 'all' | 'active' | 'completed';

export interface TodoListProps {
  // Add any props if needed in the future
}
