import { styles } from "../styles";
import WaterRoundContainer from "./wave"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <WaterRoundContainer />
      <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Kislay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I'm a code ninja armed with a keyboard and a sense of humor, ready to turn your software dreams into a reality
            <br className="sm:block hidden" />
            that will make your competitors laugh (and cry) in envy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
