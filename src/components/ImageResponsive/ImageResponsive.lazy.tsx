import React, { lazy, Suspense } from 'react';

const LazyImageResponsive = lazy(() => import('./ImageResponsive'));

const ImageResponsive = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyImageResponsive {...props} />
  </Suspense>
);

export default ImageResponsive;
