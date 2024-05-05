import React from 'react';
import ServiceSlider from '../../components/ServiceSlider';

const Racing = () => {
  return (
    <div className='w-full h-full bg-primary/30 py-32 text-center xl:text-left'>
      <div className='w-full h-full absolute right-0 bottom-0'>
        <div className='xl:bg-about bg-black bg-opacity-70 bg-blend-darken 
        xl:bg-cover xl:bg-left xl:bg-no-repeat w-full h-full absolute translate-z-0 
        sm:bg-about_sm sm:bg-cover sm:bg-center sm:border-x-gray-400 sm:bg-no-repeat' />
      </div>

      <div className='relative container mx-auto 
      xl:left-6 xl:flex-row
      md:bottom-10
      h-full 
      flex flex-col items-center gap-x-3 
      sm:my-10'>
        <div className='flex-1 flex flex-col justify-center 
        sm:justify-start 
        sm2:-mt-6
        md:mt-6'>
          <h2 className='h2 -mb-1 sm:text-lg sm2:text-xl md:text-6xl'>Engineering</h2>
          <h2 className='h2 text-accent -mb-1 sm:text-lg sm2:text-xl md:text-6xl'>Aspiration</h2>
          <h2 className='h2 mb-3 sm:text-lg sm2:text-xl md:text-6xl'>Victory</h2>
        </div>

        <div className="absolute
        xl:right-28 xl:top-1/4
        lg:top-1/2 lg:-mt-10
        md:top-1/3 md:mt-16
        sm2:top1/3 sm2:-mt-20
        sm:top-1/3 sm:-mt-16"> 
          <ServiceSlider />
        </div>

      </div>
    </div>
  );
};

export default Racing;
