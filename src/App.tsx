import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Suspense>
    </>
  );
}

export default App;
