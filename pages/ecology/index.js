import React from 'react';
import { motion } from 'framer-motion';
import { opacity } from '../../variants';

const Ecology = () => {
  return (
    <div className='bg-test_c w-full h-full flex items-center justify-center'>

      {/* img 1 */}
      <motion.div 
      variants={opacity}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='xl:w-[750px] sm:w-[550px] h-full absolute xl:left-20 sm:bg-center top-0
      bg-xc90 bg-cover bg-center bg-no-repeat mix-blend-color-dodge w-full'>
      </motion.div>

      <div className='absolute xl:top-1/4 sm:top-1/4 xl:right-1/4'>
        {/* container with blur effect */}
        <div className='sm:bg-white/5 sm:backdrop-blur-md p-4 rounded-2xl'>
          {/* title */}
          <h1 className='h1 mb-6 xl:text-left sm:text-center'>
            Ecology
          </h1>

          {/* subtitle */}
          <p className='xl:max-w-lg sm:max-w-sm sm:text-left text-white/85'>
            Particle filter - <span className='text-amber-500'>from 100 EUR</span><br />
            Catalysator with NOX - <span className='text-amber-500'>from 100 EUR</span><br />
            EGR - <span className='text-amber-500'>from 50 EUR</span><br />
            AdBlue - <span className='text-amber-500'>from 75 EUR</span><br />
            Swirl Flaps - <span className='text-amber-500'>from 50 EUR</span><br />
            Back to Stock - <span className='text-amber-500'>from 50 EUR</span><br />
          </p>
          
        </div>
      </div>

    </div>
  );
};

export default Ecology;
