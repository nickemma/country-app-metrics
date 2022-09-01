import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => (
  <div className="loading">
    <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
      <Skeleton count={3} />
    </SkeletonTheme>
  </div>
);

export default Loader;
