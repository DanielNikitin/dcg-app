// variants
import ProjectsBtn from '../components/ProjectsBtn';
import { fadeIn } from '../variants';

// framer motion
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* bg image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* bg img fullscreen settings*/}
        <div className='xl:bg-main bg-black bg-opacity-40 bg-blend-darken
         xl:bg-cover xl:bg-left xl:bg-no-repeat w-full h-full absolute translate-z-0
         sm:bg-main_sm sm:bg-cover sm:bg-center sm:border-x-gray-400 sm:bg-no-repeat'>
        </div>
      </div>
      {/* text */}
      <div className='relative w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-12 xl:text-left h-full container mx-auto'>
          {/* Daily Customs Garage */}
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-white font-thin lg:text-2xl tracking-tight
            max-w-sm xl:max-w-xl mx-auto xl:mx-0 -m-2'>
              DAILY CUSTOMS GARAGE
          </motion.p>
          {/* Welcome */}
          <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'>
              <span className='text-white sm:text-4xl'>WELCOME</span>
          </motion.h1>
          {/* button */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          {/* button */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
            >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
