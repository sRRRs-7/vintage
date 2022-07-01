import { SetMealSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

type Props = {};

const AccessPage = (props: Props) => {
  const [map, setMap] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMap(true);
    }, 4000);
  });

  return (
    <>
      <div className='flex justify-center p-5 h-full bg-orange-300'>
        {map ? (
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.757581863835!2d141.3243802158504!3d43.04653177914683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29f0504d17e7%3A0x92ae9c4e3a7ff5e!2z44CSMDY0LTA4MDkg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65Y2X77yZ5p2h6KW_77yS77yQ5LiB55uu77yT4oiS77yR77yS!5e0!3m2!1sja!2sjp!4v1656701153359!5m2!1sja!2sjp'
            width='1000'
            height='800'
          ></iframe>
        ) : (
          <video className='fixed top-0 left-0 -z-50 w-full' playsInline autoPlay muted loop>
            <source src='/Google earth.mp4' type='video/mp4' />
          </video>
        )}
      </div>
    </>
  );
};

export default AccessPage;
