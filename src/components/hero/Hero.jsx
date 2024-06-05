import { styles } from "../../styles";
import WaterRoundContainer from "../wave"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  const startTyping = (typewriter) => {
    typewriter
      .typeString('Developer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Kislay')
      .pauseFor(1000)
      .start();
  };

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = 'kumar.kislayy@gmail.com';
    document.body.appendChild(textArea);

    const range = document.createRange();
    range.selectNode(textArea);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" ></div>

      <section className="relative w-full h-screen mx-auto">
        <WaterRoundContainer />
        <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center`}>
          <div className="">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 100,
                duration: 0.5
              }}
              className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF] inline-block">  <Typewriter onInit={startTyping} /></span>
            </motion.h1>
            <motion.hr initial={{ width: '0%' }} animate={{ width: '35%' }} transition={{ type: 'spring', duration: 1 }} className="w-[10rem] border" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 100
              }} className={`${styles.heroSubText} mt-7 text-white-100 font-light`}>
 
              I specialize in delivering flawless websites and applications for Android and iOS. With a profound commitment to innovation and precision, 
              <br className="sm:block hidden" />
              I leverage extensive technical expertise to seamlessly transform concepts into top-tier digital solutions.
            </motion.p>
            <div className="flex gap-2 items-center cursor-pointer mt-14">
              <FontAwesomeIcon icon={faArrowRight} size="1x" className="pt-3" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  duration: 0.5
                }}
                className={`${styles.sectionSubText} mt-4 text-white-100 text-center`}
                onClick={handleCopyClick}
                onClickCapture={({ target }) => {
                  // Change the text or perform any action when hover starts
                  target.innerText = 'Copied Email';
                }}
                onHoverStart={({ target }) => {
                  // Change the text or perform any action when hover starts
                  target.innerText = 'Copy Email?';
                }}
                onHoverEnd={({ target }) => {
                  // Reset the text or perform any action when hover ends
                  target.innerText = 'Get in Touch';
                }}>
                Get in Touch
              </motion.p>
            </div>
            <motion.hr initial={{ width: '0%' }} animate={{ width: '15%' }} transition={{ type: 'spring', duration: 1 }} className="w-[10rem] border peer-hover:opacity-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
