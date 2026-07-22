import name from "../assets/myname.png"
import glitter_star from "../assets/glitterstars.png"
import glitter_fabric from "../assets/glitterfabric.png"
import paper from "../assets/paper.png"

function Hero(){
return(
    <div className="bg-pink-50 w-full max-w-4xl mx-auto mt-10 px-4">
        <div className="relative flex justify-center items-center mt-1">
            <img
                src={paper}
                className="absolute z-0 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
                alt=""
            />
            <img
                src={name}
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                alt="my-name"
            />
            
        </div>
    </div>
)

}
export default Hero;