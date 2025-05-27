import { Seo } from '@/components/common/Seo/Seo';
import { TodoList } from '@/features/todo-list/components/TodoList';

export function TodoListPage() {
  return (
    <>
      <Seo title="Todo List" description="Todo List" />
      <TodoList />
    </>
  )
};

export default TodoListPage; 
