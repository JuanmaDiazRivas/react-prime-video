import React, { lazy, Suspense } from 'react';

const LazyListCarouselDouble = lazy(() => import('./ListCarouselDouble'));

const ListCarouselDouble = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyListCarouselDouble {...props} />
  </Suspense>
);

export default ListCarouselDouble;
