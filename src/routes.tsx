import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const ErrorPage = lazy(() => import('./pages/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
