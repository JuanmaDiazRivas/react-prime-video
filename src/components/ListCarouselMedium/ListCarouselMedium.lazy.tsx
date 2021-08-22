import React, { lazy, Suspense } from 'react';

const LazyListCarouselMedium = lazy(() => import('./ListCarouselMedium'));

const ListCarouselMedium = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyListCarouselMedium {...props} />
  </Suspense>
);

export default ListCarouselMedium;
