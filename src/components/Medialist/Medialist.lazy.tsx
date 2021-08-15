import React, { lazy, Suspense } from 'react';

const LazyMedialist = lazy(() => import('./Medialist'));

const Medialist = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMedialist {...props} />
  </Suspense>
);

export default Medialist;
