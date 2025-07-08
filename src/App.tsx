import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Suspense } from 'react';

function App() {
  return (
    <>
      {/* 렌더링 되기 전 로딩될 UI 제공ㄴ */}
      <Suspense fallback={<div>로딩 중...</div>}>
        {/* @ts-expect-error Temporarily disabled error */}
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Suspense>
    </>
  );
}

export default App;
