import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo, TodoFilter } from '../types';

interface TodoListState {
  todos: Todo[];
  filter: TodoFilter;
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
  setFilter: (filter: TodoFilter) => void;
  clearTodos: () => void;
}

export const useTodoListStore = create(
  persist<TodoListState>(
    (set) => ({
      todos: [],
      filter: 'all',
      addTodo: (text) => {
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), text, completed: false },
          ],
        }));
      },
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      toggleComplete: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      setFilter: (filter) => set({ filter }),
      clearTodos: () => set({ todos: [] }),
    }),
    {
      name: 'todoListStore',
    }
  )
);
