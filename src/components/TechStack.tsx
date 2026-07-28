import { FlowSection } from "./Flowart";
import { Icon } from "@iconify/react";

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

function TechStack() {
  return (
  
      <FlowSection
        
        aria-label="Tech Stack"
        pin={false}
        style={{ backgroundColor: "#000", color: "#fff" }}
      >

         <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight  text-white">
          Tech
          <br />
          Stack
        </h2>

        <div  className="mt-16 flex flex-col">
          {techStack.map((section) => (
            <div key={section.title} className="border-t border-white/15 py-10">
              <div className="flex flex-col sm:gap-20 lg:gap-50 sm:flex-row sm:items-start">
                <h3 className="w-full shrink-0 text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-none text-white/40 sm:w-64">
                  {section.title}
                </h3>

                <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-5">
                  {section.items.map(({ name, icon }) => (
                    <div key={name} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <Icon
                        
                          icon={icon}
                          width={60}
                          height={60}
                        />
                      </span>

                      <span className="text-base sm:text-2xl text-white ">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
                     
        </div>
      </FlowSection>

  );
}

export default TechStack;