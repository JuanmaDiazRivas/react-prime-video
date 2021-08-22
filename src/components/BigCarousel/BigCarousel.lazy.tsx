import React, { lazy, Suspense } from 'react';

const LazyBigCarousel = lazy(() => import('./BigCarousel'));

const BigCarousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBigCarousel {...props} />
  </Suspense>
);

export default BigCarousel;
