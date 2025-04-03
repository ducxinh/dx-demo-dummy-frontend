import { AuthProvider } from '@/contexts/AuthContext';
import { router } from '@/lib/router';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './providers/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
