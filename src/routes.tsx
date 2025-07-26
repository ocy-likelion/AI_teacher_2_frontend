import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const Layout = lazy(() => import('./components/layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const MyPage = lazy(() => import('./pages/MyPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const ProblemHistoryPage = lazy(() => import('./pages/ProblemHistoryPage'));
const ProblemUploadPage = lazy(() => import('./pages/ProblemUploadPage'));
const ProblemDetailPage = lazy(() => import('./pages/ProblemDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ServerErrorPage = lazy(() => import('./pages/ServerErrorPage'));
const MockApiPage = lazy(() => import('./MockApiPage.tsx'));
const LayoutWrapper = lazy(() => import('./components/layout/LayoutWrapper'));
const BasicLayout = lazy(() => import('./components/layout/BasicLayout'));
const RequireAuth = lazy(() => import('./components/layout/RequireAuth'));
const ErrorLayout = lazy(() => import('./components/layout/ErrorLayout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <LayoutWrapper>
        <BasicLayout>
          <NotFoundPage />
        </BasicLayout>
      </LayoutWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <BasicLayout>
            {/* <RequireAuth>
              <HomePage />
            </RequireAuth> */}
            <HomePage />
          </BasicLayout>
        ),
      },
      {
        path: '/not-found',
        element: (
          <ErrorLayout from='api-error'>
            <NotFoundPage />
          </ErrorLayout>
        ),
      },
      {
        path: '/error',
        element: (
          <ErrorLayout from='api-error'>
            <ServerErrorPage />
          </ErrorLayout>
        ),
      },

      {
        path: '/intro',
        element: (
          <RequireAuth>
            <LandingPage />
          </RequireAuth>
        ),
      },
      {
        path: '/onboarding',
        element: (
          <RequireAuth>
            <OnboardingPage />
          </RequireAuth>
        ),
      },
      {
        path: '/login',
        element: (
          <RequireAuth>
            <LoginPage />
          </RequireAuth>
        ),
      },
      {
        path: '/history',
        element: (
          <BasicLayout>
            <ProblemHistoryPage />

            {/* <RequireAuth>
              <ProblemHistoryPage />
            </RequireAuth> */}
          </BasicLayout>
        ),
      },
      {
        path: '/profile',
        element: (
          <BasicLayout>
            {/* <RequireAuth>
              <MyPage />
            </RequireAuth> */}
            <MyPage />
          </BasicLayout>
        ),
      },
      {
        path: '/problem',
        element: (
          // <RequireAuth>
          //   <Outlet />
          // </RequireAuth>
          <Outlet />
        ),
        children: [
          {
            index: true,
            element: (
              <BasicLayout>
                <NotFoundPage />
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
