import { useState } from "react";
import { FlowSection } from "./Flowart";
import { Icon } from "@iconify/react";
import naqsh from "../assets/naqsh.png";
import store from "../assets/paperpalace.png";
import catos from "../assets/catos.png";
import rice from "../assets/rice.png";
import portfolio from "../assets/portfolio1.png";

const GITHUB_PROFILE = "https://github.com/aleezazahra";

const projects = [
  {
    title: "Naqsh Resume Builder",
    category: "Full-Stack",
    dateRange: "June 2026",
    accent: "#686868",
    description:
      "A full-stack resume builder that lets users create, customize, and export professional resumes through a clean, guided interface. Includes secure sign-in with Google OAuth, live editing with instant preview, multiple resume templates, and one-click PDF export, all backed by a MongoDB data layer for saving and revisiting drafts.",
    stack: [
      { label: "Frontend", value: "TypeScript, React" },
      { label: "Backend", value: "Node.js, Express.js, MongoDB, Google Auth" },
    ],
    image: naqsh,
    github: "https://github.com/aleezazahra/resume-builder",
    url: "https://naqshresume.vercel.app",
  },
  {
    title: "Paper Bags",
    category: "Full-Stack",
    dateRange: "July 2026",
    accent: "#686868",
    description:
      "A MERN-based e-commerce storefront for stationery and paper products, with a full admin panel for managing inventory, tracking orders, and updating listings. Handles user authentication, a persistent cart, and integrated secure payment processing from browsing through checkout.",
    stack: [
      { label: "Frontend", value: "TypeScript, React" },
      { label: "Backend", value: "Node.js, Express.js, MongoDB" },
    ],
    image: store,
    github: null,
    url: "https://project-stationary.vercel.app/",
  },
  {
    title: "CatOs Portfolio",
    category: "Frontend",
    dateRange: "March 2026",
    accent: "#686868",
    description:
      "A retro operating-system-themed personal portfolio, styled as a desktop complete with draggable windows, a taskbar, and boot animation, wrapped in a cozy cat-themed background for a playful, nostalgic feel.",
    stack: [
      { label: "Frontend", value: "  TypeScript, React" },
    ],
    image: catos,
    github: "https://github.com/aleezazahra/CatOs",
    url: "https://catos-portfolio01.netlify.app/",
  },
  {
    title: "Hyprland Fedora Rice ",
    category: "Bash Scripting | Linux",
    dateRange: "July 2026",
    accent: "#686868",
    description:
      "A fully customized Fedora desktop setup built around the Hyprland Wayland compositor, including a hand-configured Waybar status bar, custom keybindings, and shell scripts that tie theming, wallpapers, and system utilities together into one cohesive rice.",
    stack: [
      { label: "Tech ", value: "Bash, CSS, Hyprland, Waybar, Pywal, zsh" },
    ],
    image: rice,
    github: "https://github.com/aleezazahra/hyprland-fedora",
    url: "https://youtu.be/FHg1B-dUH2M",
  },
  {
    title: "Portfolio site ",
    category: "TailwindCSS | React",
    dateRange: "January 2026",
    accent: "#686868",
    description:
      "My first personal portfolio, built with React and TailwindCSS in a soft pink-toned design. Features a light/dark mode toggle, a dedicated skills section, and an about-me page introducing who I am beyond the code.",
    stack: [
      { label: "Frontend", value: "React, TailwindCSS" },
    ],
    image: portfolio,
    github: "https://github.com/aleezazahra/portfolio",
    url: "https://portfolio-aleeza81.vercel.app/",
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const project = projects[current];

  // Infinite/unlimited looping functions
  const goPrev = () => {
    setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
    setImgError(false);
  };
  const goNext = () => {
    setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));
    setImgError(false);
  };

  return (
    <FlowSection
      id="projects"
      aria-label="Projects"
      pin={false}
      style={{ backgroundColor: "#fff", color: "#111" }}
    >
      <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight text-black">
        Projects
      </h2>

      <div className="relative mt-12">
      
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-md hover:bg-neutral-800"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next project"
          className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-md hover:bg-neutral-800"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>

        <div className="px-16 py-10 sm:px-20">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-black">
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-medium uppercase tracking-wide text-black/50">
                <span>{project.category}</span>
                <span className="h-1 w-1 rounded-full bg-black/30" />
                <span>{project.dateRange}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p
                className="text-xl leading-relaxed"
                style={{ color: "#1a1a1a" }}
              >
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {project.stack.map((row) => (
                  <div key={row.label} className="flex gap-4 text-base">
                    <span className="w-28 shrink-0 font-semibold uppercase tracking-wide text-black/50">
                      {row.label}
                    </span>
                    <span style={{ color: "#333333" }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-base font-medium text-black transition-colors hover:bg-black hover:text-white"
                  >
                    <Icon icon="mdi:github" width={20} height={20} />
                    View Code
                  </a>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-colors hover:bg-black/80"
                  >
                    <Icon icon="mdi:open-in-new" width={20} height={20} />
                    View Live
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-3 aspect-[16/9] -mt-30 overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-sm">
              {!imgError ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-black/30">
                  <Icon icon="mdi:image-off-outline" width={32} height={32} />
                  <span className="text-xs">Screenshot coming soon</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-6">
            <span className="text-xs font-medium tracking-widest text-black/40">
              {current + 1} / {projects.length}
            </span>

            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-black/15 px-8 py-3 text-lg font-medium text-black/70 transition-colors hover:bg-black hover:text-white"
            >
              <Icon icon="mdi:github" width={16} height={16} />
              View more on GitHub
            </a>
          </div>
        </div>
      </div>
    </FlowSection>
  );
}

export default Projects;
