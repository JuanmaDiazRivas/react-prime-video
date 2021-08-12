import React, { lazy, Suspense } from 'react';

const LazyNavBar = lazy(() => import('./Navbar'));

const Navbar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavBar {...props} />
  </Suspense>
);

export default Navbar;
