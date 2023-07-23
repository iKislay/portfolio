import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import linkedin from "../assets/company/linkedin.png"
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
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 100
          }}
          className='mb-2'>
          <h2 className='text-4xl sm:text-5xl font-black text-white leading-12 sm:leading-16'>
            Let's Work Together...
          </h2>
        </motion.div>

        <div className='relative mt-2'>
          <motion.hr 
          initial={{ opacity: 0, x: 1000, flexGrow: 0 }}
          animate={{ opacity: 1, x: 0, flexGrow: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 50,
            delay: 1.5
          }}
          className='border-t border-white flex-grow' />
          <Link to='/contact'
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 50
            }}className='absolute w-24 h-24 sm:w-32 sm:h-32 bg-black rounded-full -top-16 right-6 sm:right-9 flex justify-center magnetic'>
              <h2 className='text-6 sm:text-9 font-bold flex justify-center items-center text-center magnetic'>
                Get In Touch
              </h2>
            </motion.div>
          </Link>
          <motion.div
            className='bg-black mt-14 sm:mt-9 rounded-full py-1 px-3 inline-block magnetic'
            whileHover='hover'
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 100
            }}
          >
            <Link to='mailto:kumar.kislayy@gmail.com' onClick={handleClick}>
              <p className='lg:text-[20px] sm:text-[18px] xs:text-[15px] text-[13px] magnetic'>kumar.kislayy@gmail.com</p>
            </Link>
          </motion.div>
        </div>
        <div className='container mx-auto px-4'>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 100
            }}
            className='text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>
              <Link to="https://www.linkedin.com/in/imkislay/" target='_blank' className='flex flex-row gap-6'>
            <img src={linkedin} alt="linkedin Logo" className='h-8 w-8 magnetic' />
            <h2>@imkislay</h2>
              </Link>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Footer;
