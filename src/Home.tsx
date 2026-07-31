import { useState } from "react";
import FlowArt, { FlowSection } from "../src/components/Flowart";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Icon } from "@iconify/react";
import myResume from "../src/assets/my resume2.pdf"; // Renamed file to avoid spaces
import myVideo from "../src/assets/waves.mp4";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Statement from "./components/Statement";
import Projects from "./components/Projects";

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    setOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "About", sectionId: "about" },
    { label: "Projects", sectionId: "projects" },
    { label: "Tech Stack", sectionId: "tech-stack" },
    { label: "Contact", sectionId: "contact" },
  ];

  return (
    <>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed top-6 right-6 z-[9999] p-3 text-white transition-transform hover:scale-105 ${
          open ? "" : "mix-blend-difference"
        }`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-menu"
      >
        {open ? <X size={40} /> : <Menu size={45} />}
      </button>


      {open && (
        <div id="main-menu" className="fixed inset-0 z-[9998] flex items-center justify-center bg-black text-white">
          <nav aria-label="Main navigation" className="flex flex-col items-center gap-7 text-center text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase">
            {menuItems.map(({ label, sectionId }) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => scrollTo(sectionId)}
                className="transition-opacity hover:opacity-60"
              >
                {label}
              </button>
            ))}
            <a
              href="https://github.com/aleezazahra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="mt-2 flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-black"
            >
              <Icon icon="mdi:github" width={22} height={22} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}

      <FlowArt>
        
        <FlowSection
          id="about"
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
          
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo("contact");
                }}
                className="group relative overflow-hidden rounded-full border border-white/40 px-10 py-3 text-xs uppercase tracking-[0.35em]"
                aria-label="Go to contact section"
              >
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
