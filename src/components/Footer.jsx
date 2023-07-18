import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    const magnets = document.querySelectorAll('.magnetic');
    const strength = 50;

    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet);
      magnet.addEventListener('mouseout', function (event) {
        gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: 'power4.out' });
      });
    });

    function moveMagnet(event) {
      const magnetButton = event.currentTarget;
      const bounding = magnetButton.getBoundingClientRect();

      gsap.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: 'power4.out',
      });
    }
  }, []);

  const variants = {
    hover: {
      scale: 1.1,
    },
  };

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <>

      <div className='p-8 flex flex-col gap-6 justify-between sm:p-12'>
      <motion.div variants={textVariant()} className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-black text-white leading-12 sm:leading-16'>
            Let's Work Together...
          </h2>
        </motion.div>

        <div className='relative mt-10'>
          <hr className='border-t border-white flex-grow' />
          <Link to='/contact' 
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <div className='absolute w-24 h-24 sm:w-32 sm:h-32 bg-black rounded-full -top-12 right-6 sm:right-9 flex justify-center magnetic'>
              <h2 className='text-6 sm:text-9 font-bold flex justify-center items-center text-center magnetic'>
                Get In Touch
              </h2>
            </div>
          </Link>
          <motion.div
            className='bg-black mt-14 sm:mt-9 rounded-full py-1 px-3 inline-block'
            whileHover='hover'
            variants={variants}
          >
            <Link to='mailto:kumar.kislayy@gmail.com' onClick={handleClick}>
              <p className='lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[13px]'>kumar.kislayy@gmail.com</p>
            </Link>
          </motion.div>
        </div>
        <div className='container mx-auto px-4'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            I help companies from all over the world with tailor-made solutions. With each project, I push my work to new
            horizons, always putting quality first.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Footer;
