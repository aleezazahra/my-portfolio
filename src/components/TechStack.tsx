import { FlowSection } from "./Flowart";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const techStack = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      {name:"CSS3",icon:"mdi:language-css3"},
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Python", icon: "logos:python" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "simple-icons:express" },
    ],
  },

  {
    title: "Platforms",
    items: [
     
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Vercel", icon: "simple-icons:vercel" },
      { name: "Railway", icon: "simple-icons:railway" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      {name:"MongoDB",icon:"devicon:mongodb"}
    ],
  },
  {
    title:"Tools",
    items:[
       { name: "Git", icon: "logos:git-icon" },
       {name:"Linux",icon:"devicon:linux"},
       {name:"Bash",icon:"devicon:bash"},
       {name:"Selenium",icon:"simple-icons:selenium"},
       {name:"BeautifulSoup",icon:"simple-icons:python"},
       {name:"Scrapy",icon:"simple-icons:scrapy"},
       {name:"OpenAI",icon:"simple-icons:openai"},
       {name:"Claude",icon:"simple-icons:anthropic"},

 
   
    ]
  }
];

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SCRAMBLE_STEP_MS = 40;
const SCRAMBLE_STEPS_PER_LETTER = 3;

function useScrambleText(text: string, active: boolean) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    const totalFrames = text.length * SCRAMBLE_STEPS_PER_LETTER;

    const interval = setInterval(() => {
      frame += 1;
      const revealCount = Math.floor((frame / totalFrames) * text.length);

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " " || char === "\n") return char;
          if (i < revealCount) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");

      setDisplay(next);

      if (revealCount >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, SCRAMBLE_STEP_MS);

    return () => clearInterval(interval);
  }, [active, text]);

  return display;
}

const HEADING_TEXT = "Tech\nStack";

function ScrambleHeading() {
  const [hovered, setHovered] = useState(false);
  const display = useScrambleText(HEADING_TEXT, hovered);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-default text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight text-white"
    >
      {display.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </motion.h2>
  );
}

function TechStack() {
  return (
  
      <FlowSection
        id="tech-stack"
        aria-label="Tech Stack"
        pin={false}
        style={{ backgroundColor: "#000", color: "#fff" }}
      >

        <ScrambleHeading />

        <div className="mt-10 flex flex-col sm:mt-16">
          {techStack.map((section, sectionIndex) => (
            <motion.div 
              key={section.title} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: sectionIndex * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="border-t border-white/15 py-8 sm:py-10"
            >
              <div className="flex flex-col gap-7 md:flex-row md:items-start md:gap-12 xl:gap-32">
                <h3 className="w-full shrink-0 text-[clamp(1.75rem,5vw,3.5rem)] font-bold uppercase leading-none text-white/40 md:w-52 xl:w-64">
                  {section.title}
                </h3>

                <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-5 gap-y-7 min-[380px]:grid-cols-2 sm:grid-cols-3 sm:gap-y-10 xl:grid-cols-4">
                  {section.items.map(({ name, icon }) => (
                    <div key={name} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <Icon
                          icon={icon}
                          width={60}
                          height={60}
                        />
                      </span>

                      <span className="min-w-0 break-words text-base text-white sm:text-lg xl:text-xl">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
                     
        </div>
      </FlowSection>

  );
}

export default TechStack;