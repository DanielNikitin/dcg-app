// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-14'>
      {/* round button settings */}
      <Link 
        href={'/racing'} 
        className='relative w-[130px] h-[130px] flex justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image
          src={'/rounded-text.svg'}
          width={100}
          height={100}
          alt=''
          className='animate-spin-slow w-full h-full  max-w-[100px] max-h-[100px]'
        />
        <HiArrowRight 
          className='absolute text-4xl hover:text-accent group-hover:text-5xl
          transition-all duration-300' />
          {/* absolute text-4xl hover:text-accent transition-all duration-300 */}
      </Link>
    </div>
  );
};

export default ProjectsBtn;
