import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// data
const serviceData = [
  {
    title: 'Engine Construction',
    description: 'Engine construction and tuning is not just a hobby, but a personal interest as result. Our experience and ability to research information, sort through it, solve various problems, and apply it all together to engine construction enables us to create configurations that meet the desires of our clients.',
  },
  {
    title: 'ECU Modifying',
    description: 'Certified specialist from EVC.DE representative for tuning (calibration) of electronic engine control units (ECU). In order to optimize, improve performance or edit vehicle emission control standards. In a 2 years of work without active advertising, more than 50 Vehicles were successfully configured, most of them in Estonia.',
  },
  {
    title: 'Boost Tune',
    description: 'We provide a service for configuring the turbine for your car for motorsport purposes. Changing a turbine model to another, or modifying an existing turbine, in order to increase the flow of cold air with minimal inertia losses.',
  },
  {
    title: 'Assurance',
    description: 'DCG provides a lifetime warranty on the firmware we create for our clients. Individual firmware calibration allows us to control the process and provide optimal results based on customer wishes. We provide measurement reports from the Dragy. Our team is ready to help at any time and resolve any questions or problems that arise related to our services.',
  },
];

const ServiceSlider = () => {
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: '17rem',
    arrows: false,
    speed: 2000,
  };

  return (
    <div className="wrapper sm:w-[330px] md:w-[600px] backdrop-blur-sm shadow-2xl">
      <Splide
        options={options}

        hasTrack={false}
      >
        <div className='relative xl:px-4'>
          <SplideTrack>
            {serviceData.map((slide, index) => (
              <SplideSlide key={index}>
                <div>
                  <h2 className='h1 text-white sm:text-sm sm2:text-xl md:text-6xl'>{slide.title}</h2>
                  <p className='text-white/80 sm:text-sm md:text-xl text-left'>{slide.description}</p>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>

        <div className="splide__progress__bar" />

        <button className="splide__toggle">
          <span className="splide__toggle__play ">Play</span>
          <span className="splide__toggle__pause ">Pause</span>
        </button>
      </Splide>
    </div>
  );
};

export default ServiceSlider;