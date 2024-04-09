import React, { useState } from 'react';

//  data
const aboutData = [
  {
    title: 'Engine Construction',
    info: [
      {
        title: 'Engine construction and tuning is not just a hobby, but a personal interest as result. Our experience and ability to research information, sort through it, solve various problems, and apply it all together to engine construction enables us to create configurations that meet the desires of our clients.',
      }
    ],
  },
  {
    title: 'ECU Modifying',
    info: [
      {
        title: 'Certified specialist from EVC.DE representative for tuning (calibration) of electronic engine control units (ECU). In order to optimize, improve performance or edit vehicle emission control standards. In a 2 years of work without active advertising, more than 50 Vehicles were successfully configured, most of them in Estonia.',
      }
    ],
  },
];

// components
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='w-full h-full bg-primary/30 py-32 text-center xl:text-left'>
      {/* bg image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* bg img fullscreen settings*/}
        <div className='xl:bg-about bg-black bg-opacity-70 bg-blend-darken
         xl:bg-cover xl:bg-left xl:bg-no-repeat w-full h-full absolute translate-z-0
         sm:bg-main_sm sm:bg-cover sm:bg-center sm:border-x-gray-400 sm:bg-no-repeat'>
        </div>
      </div>
      <Circles />
      
      <div className='relative container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6'>
        {/* Main text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className='h2 -mb-1'>
            Engineering
          </motion.h2>

          <motion.h2
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-accent -mb-1'>
            Aspiration
          </motion.h2>
          
          <motion.h2 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-3'>
            Victory
          </motion.h2>
          {/*
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          From Concept to Finish - It's Our Way!
          </p>
          /*/}
        </div>

        {/* info */}
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  `text-accent after:w-full after:bg-accent after:transition-all
                  after:duration-300`}
                  cursor-pointer capitalize xl:text-lg relative after:w-4
                after:h-[1px] after:bg-white after:absolute after:-bottom-0.5
                after:left-0`}
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/90'
              >
                {/* title */}
                <div
                  className='font-light mb-2 md:mb-0'>
                    {item.title}
                </div>
                <div className='hidden md:flex'></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;