import React, { lazy, Suspense } from 'react';

const components = {
  Categories: lazy(() => import('./Categories')),
  Countdown: lazy(() => import('./Countdown')),
  DiscountSlider: lazy(() => import('./DiscountSlider')),
  Explore: lazy(() => import('./Explore')),
  ImageSlider: lazy(() => import('./ImageSlider')),
  MenuBar: lazy(() => import('./MenuBar')),
}

function Main() {
  return (
    <div className='flex flex-col gap-20'>
      <div className="flex flex-row gap-10 px-10 pt-6 sec-one">
        <Suspense fallback={<div>Loading...</div>}>
          <components.MenuBar />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <components.ImageSlider />
        </Suspense>
      </div>
      <div className='flex flex-col gap-8 sec-two'>
        <Suspense fallback={<div>Loading...</div>}>
          <components.Countdown /> 
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <components.DiscountSlider />
        </Suspense>
      </div>
      <div className='sec-three'>
        <Suspense fallback={<div>Loading...</div>}>
          <components.Categories />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <components.Explore /> 
        </Suspense>
      </div>
    </div>
  );
}

export default Main;
