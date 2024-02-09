import { Link } from "react-router-dom";
import Search from "./Search";
import SSlider from "./Slider";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="hero" className=" container relative">
      <div className=" flex flex-col justify-center items-center  space-y-12 md:w-1/2 mx-auto mb-14">
        <div className="max-w-3xl text-4xl font-bold text-center md:text-5xl flex flex-col gap-x-5 gap-y-2">
          <h1>We Help You Gain</h1>
          <div className=" flex justify-center items-center">
            <p>More </p>
            <div className="bg-gradient-to-r from-orange-600 to-orange-900 bg-clip-text text-transparent ml-4">
              <Typewriter
                options={{
                  strings: ["Streams", "Followers", "Listners", "Fans"],
                  autoStart: true,
                  loop: true,
                  pausefor: 2000,
                }}
              />
            </div>
          </div>
        </div>
        <SSlider />
        <Search />
        <Link
          to="#"
          className="py-3 px-6 text-white bg-orange-500 rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </Link>
      </div>
      {/* Image */}
      {/* <div className=" lg:block md:hidden lg:w-1/2">
          <img src={illustrationIntro} alt="" />
        </div> */}
    </section>
  );
};

export default Hero;
