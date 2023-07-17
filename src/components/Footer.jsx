import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { Link } from 'react-router-dom';

const Footer = () => {
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
      <div className='p-[100px]'>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} py-2`}>Let's Work Together...</h2>
        </motion.div>
        <div className='relative mt-32'>
          <hr className='border-t border-white flex-grow' />
          <Link to='/contact'>
            <div className='absolute w-32 h-32 bg-black rounded-full -top-16 right-9 flex justify-center'>
              <h2 className='text-9 font-bold flex justify-center items-center text-center'>
                Get In Touch
              </h2>
            </div>
          </Link>
          <motion.div
            className='bg-black mt-9 rounded-full py-2 px-4 inline-block'
            whileHover='hover'
            variants={variants}
          >
            <Link to='mailto:kumar.kislayy@gmail.com' onClick={handleClick}>
              <p className='text-white'>kumar.kislayy@gmail.com</p>
            </Link>
          </motion.div>
        </div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] py-9'
        >
          I help companies from all over the world with tailor-made solutions. With each project, I push my work to new
          horizons, always putting quality first.
        </motion.p>
      </div>
    </>
  );
};

export default Footer;
