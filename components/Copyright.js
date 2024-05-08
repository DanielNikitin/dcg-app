import React from 'react';

const Copyright = () => {
  return (
    <>
      {/* Текст для размера экрана sm */}
      <div className='sm:absolute sm:opacity-80 w-full text-center py-4 text-xs sm:bottom-36 xl:hidden'>
        COPYRIGHT © 2024. DAILY CUSTOMS GARAGE ALL RIGHTS RESERVED
      </div>

      {/* Текст для размера экрана xl */}
      <div className='xl:absolute xl:opacity-80 xl:bottom-0 w-full text-center py-4 text-xs hidden sm:block'>
        COPYRIGHT © 2024. DAILY CUSTOMS GARAGE ALL RIGHTS RESERVED - MANUFACTURE OF CUSTOM ENGINES AND TUNING OF AUTOMOBILE ECU
      </div>
    </>
  );
};

export default Copyright;
