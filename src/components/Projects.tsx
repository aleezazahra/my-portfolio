import { useState } from "react";
import { FlowSection } from "./Flowart";
import { Icon } from "@iconify/react";

const GITHUB_PROFILE = "https://github.com/your-username";

const projects = [
  {
    index: "01",
    icon: "mdi:magnify",
    iconBg: "#EFE6D8",
    title: "Naqsh Resume Builder",
    category: "Full-Stack",
    dateRange: "June 2026",
    description:
      "Built a resume builder site with AI-integration ",
    stack: [
      { label: "Frontend", value: "TypeScript, React" },
      { label: "Backend", value: "Node.js, Express.js , MongoDB" },
    
    ],
  
    image: "/projects/before-you-sign.png",
    github: "https://github.com/your-username/before-you-sign",
  },
  
];

function Projects() {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const project = projects[current];
  const isFirst = current === 0;
  const isLast = current === projects.length - 1;

  const goPrev = () => {
    if (isFirst) return;
    setCurrent((i) => i - 1);
    setImgError(false);
  };
  const goNext = () => {
    if (isLast) return;
    setCurrent((i) => i + 1);
    setImgError(false);
  };

  return (
    <FlowSection
      aria-label="Projects"
      pin={false}
      style={{ backgroundColor: "#fff", color: "#111" }}
    >
      <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight text-black">
        Projects
      </h2>

      <div className="relative mt-16 border-t border-black/10">
        
        <button
          type="button"
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-black text-white shadow-md transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-20"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} />
        </button>

        
        <button
          type="button"
          onClick={goNext}
          disabled={isLast}
          aria-label="Next project"
          className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-black text-white shadow-md transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-20"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>


        <div className="px-16 py-10 sm:px-20">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium tracking-widest text-black/40">
              {current + 1} / {projects.length}
            </span>
            {isLast && (
              
             <a   href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-black hover:text-white"
              >
                <Icon icon="mdi:github" width={16} height={16} />
                View more on GitHub
              </a>
            )}
          </div>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: project.iconBg }}
              >
                <Icon icon={project.icon} width={22} height={22} color="#1d4ed8" />
              </span>
              <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-black">
                {project.title}
              </h3>
            </div>

            <span className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none">
              <span className="text-blue-600">{project.index[0]}</span>
              <span className="text-black/30">{project.index[1]}</span>
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            
            <div>
            

              <p
                className="mt-5 max-w-md text-base leading-relaxed"
                style={{ color: "#333333" }}
              >
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {project.stack.map((row) => (
                  <div key={row.label} className="flex gap-4 text-sm">
                    <span className="w-24 shrink-0 font-semibold uppercase tracking-wide text-black/50">
                      {row.label}
                    </span>
                    <span style={{ color: "#333333" }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                <Icon icon="mdi:github" width={18} height={18} />
                View Code
              </a>
            </div>

        
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-sm">
              {!imgError ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-black/30">
                  <Icon icon="mdi:image-off-outline" width={32} height={32} />
                  <span className="text-xs">Screenshot coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </FlowSection>
  );
}

export default Projects;
