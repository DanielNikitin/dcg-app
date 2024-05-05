import React from 'react';
import { motion } from 'framer-motion';
import { opacity } from '../../variants';

const Turbo = () => {
  return (
    <div className='bg-test_c w-full h-full flex items-center justify-center'>

      {/* XL */}
      <div className='bg-test_c/30 backdrop-blur-md rounded-2xl xl:flex xl:w-[1020px] xl:h-[400px] xl:items-center xl:justify-center'>

        {/* Image */}
        <motion.div 
          variants={opacity}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='relative xl:w-[60%] xl:h-[400px] md:h-[280px] sm:h-[150px] xl:order-2 
          bg-turbo bg-cover bg-center bg-no-repeat mix-blend-color-dodge rounded-2xl'>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-25 rounded-2xl"></div>
        </motion.div>

        {/* Text */}
        <div className='p-6 xl:w-[50%] xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-md mx-auto'>
          {/* Title */}
          <h2 className='xl:h2 mb-6
          xl:text-left 
          sm:mb-1 sm:-mt-4 sm:text-center sm:h1'>
            <span className='text-accent'>Boost</span> Tech
          </h2>
          {/* Subtitle */}
          <p className='text-left text-white/85 sm:text-sm md:text-xl'>
            Fast, High-Quality and Inexpensive repair of Turbochargers is the field of activity of professionals with extensive experience, as well as established contacts with a supplier of quality parts. <br />
            DCG specialist will help determine the causes of the turbocharger malfunction, and advise you on the repair and operation of the turbocharger.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Turbo;
