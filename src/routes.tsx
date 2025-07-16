import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import RequireAuth from './utils/RequireAuth.tsx';

const Layout = lazy(() => import('./components/layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const ProblemHistoryPage = lazy(() => import('./pages/ProblemHistoryPage'));
const ProblemUploadPage = lazy(() => import('./pages/ProblemUploadPage'));
const ProblemDetailPage = lazy(() => import('./pages/ProblemDetailPage'));
const ErrorPage = lazy(() => import('./pages/NotFoundPage'));
const MockApiPage = lazy(() => import('./MockApiPage.tsx'));
const LayoutWrapper = lazy(() => import('./components/layout/LayoutWrapper'));
const BasicLayout = lazy(() => import('./components/layout/BasicLayout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <LayoutWrapper>
        <BasicLayout>
          <ErrorPage />
        </BasicLayout>
      </LayoutWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <BasicLayout>
            {/* <RequireAuth> */}
            <HomePage />
            {/* </RequireAuth> */}
          </BasicLayout>
        ),
      },
      {
        path: '/onboarding',
        element: (
          // <RequireAuth>
          <OnboardingPage />
          // </RequireAuth>
        ),
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
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <BasicLayout>
                <ErrorPage />
              </BasicLayout>
            ),
          },
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
      {
        path: '/api-test', // TODO: api 연동 테스트용으로 추후 삭제
        element: <MockApiPage />,
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
