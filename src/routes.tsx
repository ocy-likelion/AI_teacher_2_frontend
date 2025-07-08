import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Layout = lazy(() => import('./components/layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const ProblemHistoryPage = lazy(() => import('./pages/ProblemHistoryPage'));
const ProblemUploadPage = lazy(() => import('./pages/ProblemUploadPage'));
const ProblemDetailPage = lazy(() => import('./pages/ProblemDetailPage'));
const ErrorPage = lazy(() => import('./pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/onboarding',
        element: <OnboardingPage />,
      },
      {
        path: '/history',
        element: <ProblemHistoryPage />,
      },
      {
        path: '/problem/upload',
        element: <ProblemUploadPage />,
      },
      {
        path: '/problem/:id',
        element: <ProblemDetailPage />,
      },
    ],
  },
  {
    //@ts-expect-error Temporarily disabled error
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
]);

export default router;
