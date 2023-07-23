import { styles } from "../../styles";
import WaterRoundContainer from "../wave"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

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

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <section className="relative w-full h-screen mx-auto">
        <WaterRoundContainer />
        <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}>
          <div>
            <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 100
            }}
          className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF] inline-block">  <Typewriter onInit={startTyping} /></span>
              {/* Hi, I'm <span className="text-[#915EFF]">  <Typewriter onInit={startTyping} /></span> */}

            </motion.h1>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 100
            }}className={`${styles.heroSubText} mt-4 text-white-100`}>
              I'm a code ninja armed with a keyboard and a sense of humor, ready to turn your software dreams into a reality
              <br className="sm:block hidden" />
              that will make your competitors laugh (and cry) in envy!
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
