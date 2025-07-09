import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from './components/layout/BasicLayout';

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
        element: (
          <BasicLayout>
            <HomePage />
          </BasicLayout>
        ),
        // 이후 리다이렉트 설정할 때 조건문과 함께 아래 루트 수정
        // element: <Navigate to='onboarding' replace />,
      },
      {
        path: '/onboarding',
        element: <OnboardingPage />,
      },
      {
        path: '/history',
        element: (
          <BasicLayout>
            <ProblemHistoryPage />
          </BasicLayout>
        ),
      },
      {
        path: '/problem',
        children: [
          {
            path: ':_id',
            element: <ProblemDetailPage />,
          },
          {
            path: 'upload',
            element: <ProblemUploadPage />,
          },
        ],
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
