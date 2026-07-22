import name from "../assets/myname.png";
import glitter_star from "../assets/glitterstars.png";
import glitter_fabric from "../assets/glitterfabric.png";
import paper from "../assets/paper.png";
import barbie_sticker from "../assets/barbie-sticker.png";
import flower_sticker from "../assets/flower-sticker.png";
import barbie_doll from "../assets/barbie.png";
import dotted_background from "../assets/dotted-bg.jpeg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      className="w-full min-h-screen bg-repeat px-4 py-10 overflow-hidden"
      style={{ backgroundImage: `url(${dotted_background})` }}
    >
      <div className="relative -mt-20 w-full max-w-5xl mx-auto min-h-[650px] flex items-center justify-center">
        {/* Paper */}
        <img
          src={paper}
          className="absolute z-0 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
          alt=""
        />

        
        <img
          src={name}
          className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mt-3 h-auto"
          alt="my-name"
        />

    
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 z-20 text-center">
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 z-20 text-center">
            <TypeAnimation
  sequence={[
    "Hi, I'm an 18 y/o TypeScript Developer",
    1000000,
  ]}
  wrapper="h2"
  speed={55}
  cursor={true}
  repeat={0}
  style={{ fontFamily: "Kalam" }}
  className="mt-20 text-2xl sm:text-3xl md:text-4xl text-[#FF3197] whitespace-nowrap"
/>
</div>

       
        </div>

      
        <img
          src={glitter_star}
          className="absolute z-20 top-2 bottom-2 left-0  sm:left-4 w-14 sm:w-20 h-auto -rotate-12"
          alt=""
        />

     
        <img
          src={barbie_sticker}
          className="absolute z-20 top-0 right-0 sm:top-4 sm:right-6 w-16 sm:w-24 h-auto rotate-6"
          alt=""
        />

    
        <img
          src={flower_sticker}
          className="absolute z-20 bottom-0 left-2 sm:bottom-4 sm:left-8 w-14 sm:w-20 h-auto -rotate-6"
          alt=""
        />

   
        <img
          src={glitter_fabric}
          className="absolute z-20 bottom-0 right-2 sm:bottom-2 sm:right-10 w-14 sm:w-20 h-auto rotate-12"
          alt=""
        />

        <img
          src={barbie_doll}
          className="hidden md:block absolute z-20 -right-16 lg:-right-24 bottom-0 w-32 lg:w-44 h-auto"
          alt=""
        />

   
        <img
          src={glitter_star}
          className="hidden md:block absolute z-20 -left-16 lg:-left-24 top-6 w-20 lg:w-28 h-auto rotate-45"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;