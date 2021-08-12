import React, { lazy, Suspense } from 'react';

const LazyCarousel = lazy(() => import('./Carousel'));

const Carousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCarousel {...props} />
  </Suspense>
);

export default Carousel;
