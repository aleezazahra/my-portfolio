import { useState, useRef } from "react";
import FlowArt, { FlowSection } from "../src/components/Flowart";
import { Menu, X, ArrowUpRight } from "lucide-react";
import myResume from "../src/assets/my resume2.pdf"; // Renamed file to avoid spaces
import myVideo from "../src/assets/waves.mp4";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Statement from "./components/Statement";
import Projects from "./components/Projects";

export default function Home() {
  const [open, setOpen] = useState(false);
  

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    setOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 z-[9999] p-3 text-white transition-all hover:scale-105"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={40} /> : <Menu size={45} />}
      </button>


      {open && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black text-white">
          <div className="flex flex-col items-center gap-8 text-5xl font-bold uppercase">
            <button onClick={() => scrollTo(aboutRef)}>About</button>
            <button onClick={() => scrollTo(projectsRef)}>Projects</button>
            <button onClick={() => scrollTo(experienceRef)}>Experience</button>
            <button onClick={() => scrollTo(contactRef)}>Contact</button>
          </div>
        </div>
      )}

      <FlowArt>
        
        <FlowSection
          aria-label="Who am I"
          className="relative overflow-hidden"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          <div className="absolute left-1/2 top-1/2 h-52 w-[170%] -translate-x-1/2 -translate-y-1/2 rotate-[-19deg] bg-white" />

          <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
            <h1
              className="
                text-center
                leading-[0.85]
                tracking-tight
                text-[clamp(3.5rem,7vw+13vh,7rem)]
                text-white
                font-bold
                mix-blend-difference uppercase
              "
            >
              Aleeza Zahra
            </h1>

            <p
              className="
                mt-2 max-w-xl text-center tracking-[0.35em] text-xl
                text-white mix-blend-difference 
              "
            >
              18 y/o TypeScript Developer and aspiring ML engineer
            </p>

            <div className="mt-8 flex gap-5">
          
              <a href="#contact" ref={contactRef}>
                <button className="relative overflow-hidden rounded-full border border-white/40 px-10 py-3 text-xs uppercase tracking-[0.35em] group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={myVideo} type="video/mp4" />
                  </video>
                  <span className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/10"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white text-sm font-bold">
                    Contact
                  </span>
                </button>
              </a>

              
              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-full border border-white/25 px-10 py-3 text-sm uppercase tracking-[0.35em] group"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-out group-hover:h-full"></span>
                <span className="relative z-10 flex flex-row items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-black">
                  Resume
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </FlowSection>

      
        <Statement />

  
        <TechStack />
        <Projects />

     
        <About />

       
      </FlowArt>
    </>
  );
}