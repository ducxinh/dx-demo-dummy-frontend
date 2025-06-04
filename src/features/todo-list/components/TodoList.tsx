import React, { useState } from 'react';
import { PlusIcon, TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { TodoListProps, TodoFilter } from '../types';
import { useTodoListStore } from '../store/todoListStore';

const FILTERS: { label: string; value: TodoFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export const TodoList: React.FC<TodoListProps> = () => {
  const [newTodo, setNewTodo] = useState('');
  const {
    todos,
    filter,
    addTodo,
    deleteTodo,
    toggleComplete,
    setFilter,
  } = useTodoListStore();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
          >
            <PlusIcon className="h-5 w-5" />
            Add
          </button>
        </div>
        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4 justify-center">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-3 py-1 rounded-full border text-sm font-medium transition
                ${filter === f.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <ul className="divide-y divide-gray-200">
          {filteredTodos.length === 0 && (
            <li className="py-6 text-center text-gray-400">No todos</li>
          )}
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`group flex items-center justify-between px-4 py-3 my-2 rounded-lg shadow-sm border transition-all
                ${todo.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100 hover:shadow-md hover:border-blue-300'}`}
            >
              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="sr-only peer"
                    data-testid={`todo-checkbox-${todo.id}`}
                  />
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition
                    ${todo.completed ? 'border-green-500 bg-green-500' : 'border-gray-300 bg-white hover:border-blue-400'}
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300`}
                  >
                    {todo.completed && <CheckCircleIcon className="h-5 w-5 text-white" />}
                  </div>
                </label>
                <span 
                  data-testid={`todo-text-${todo.id}`}
                  className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'} transition`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md p-1 transition"
                aria-label="Delete todo"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 