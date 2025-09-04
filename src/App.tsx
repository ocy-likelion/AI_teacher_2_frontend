import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Suspense } from 'react';
import LayoutWrapper from './components/layout/LayoutWrapper';
import Loading from './components/Loading';

function App() {
  return (
    <>
      {/* 렌더링 되기 전 로딩될 UI 제공 */}
      <Suspense
        fallback={
          <LayoutWrapper>
            <Loading description='페이지를 불러오고 있어요...' />
          </LayoutWrapper>
        }
      >
        {/* @ts-expect-error Temporarily disabled error */}
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Suspense>
    </>
  );
}

export default App;
