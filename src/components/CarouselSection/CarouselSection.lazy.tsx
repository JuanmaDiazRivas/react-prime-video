import React, { lazy, Suspense } from 'react';

const LazyCarouselSection = lazy(() => import('./CarouselSection'));

const CarouselSection = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCarouselSection {...props} />
  </Suspense>
);

export default CarouselSection;
