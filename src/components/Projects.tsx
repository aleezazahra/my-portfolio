import { useState, useEffect } from "react";
import type { ReactNode } from "react";
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
    title: "Naqsh Resume",
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
   
    title: "Hyprland Rice ",
    category: "Bash Scripting | Linux",
    dateRange: "July 2026",
    accent: "#686868",
    description:
      "A fully customized Fedora desktop setup built around the Hyprland Wayland compositor, including a hand-configured Waybar status bar, custom keybindings, and shell scripts that tie theming, wallpapers, and system utilities together into one cohesive rice.",
    stack: [
      { label: "Tech ", value: "Bash, CSS, Hyprland, Waybar, Fedora, Pywal, zsh" },
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

interface WipeLinkProps {
  href: string;
  children: ReactNode;
  variant: "solid" | "outline";
}

function WipeLink({ href, children, variant }: WipeLinkProps) {
  const base =
    variant === "solid"
      ? "border border-transparent bg-black text-white"
      : "border border-black/15 bg-transparent text-black";

  const fillColor = variant === "solid" ? "bg-white" : "bg-black";
  const textHover = variant === "solid" ? "group-hover:text-black" : "group-hover:text-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-base font-medium transition-colors duration-300 ${base}`}
    >
      <span
        className={`pointer-events-none absolute inset-0 origin-bottom scale-y-0 ${fillColor} transition-transform duration-500 ease-out group-hover:scale-y-100`}
        aria-hidden="true"
      />
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${textHover}`}>
        {children}
      </span>
    </a>
  );
}

const SCRAMBLE_TEXT = "Projects";
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
          if (char === " ") return " ";
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

function ScrambleHeading() {
  const [hovered, setHovered] = useState(false);
  const display = useScrambleText(SCRAMBLE_TEXT, hovered);

  return (
    <h2
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-default text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight text-black"
    >
      {display}
    </h2>
  );
}

function Projects() {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const project = projects[current];

  useEffect(() => {
    projects.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

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
      <ScrambleHeading />

      <div className="relative mt-8 sm:mt-12">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute bottom-0 left-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-md hover:bg-neutral-800 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next project"
          className="absolute bottom-0 left-14 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-md hover:bg-neutral-800 sm:bottom-auto sm:left-auto sm:right-0 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>

        <div className="pb-16 sm:px-16 sm:py-10 md:px-20">
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

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-5 lg:items-start lg:gap-10">
            <div className="lg:col-span-2">
              <p
                className="text-base leading-relaxed sm:text-lg xl:text-xl"
                style={{ color: "#1a1a1a" }}
              >
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {project.stack.map((row) => (
                  <div key={row.label} className="flex flex-col gap-1 text-sm min-[420px]:flex-row min-[420px]:gap-4 sm:text-base">
                    <span className="shrink-0 font-semibold uppercase tracking-wide text-black/50 min-[420px]:w-28">
                      {row.label}
                    </span>
                    <span style={{ color: "#333333" }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {project.github && (
                  <WipeLink href={project.github} variant="outline">
                    <Icon icon="mdi:github" width={20} height={20} />
                    View Code
                  </WipeLink>
                )}

                {project.url && (
                  <WipeLink href={project.url} variant="solid">
                    <Icon icon="mdi:open-in-new" width={20} height={20} />
                    View Live
                  </WipeLink>
                )}
              </div>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-sm lg:col-span-3 lg:-mt-20 xl:-mt-28">
              {!imgError ? (
                <img
                  key={project.image}
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center animate-[fadeIn_0.3s_ease-out]"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-black/30">
                  <Icon icon="mdi:image-off-outline" width={32} height={32} />
                  <span className="text-xs">Screenshot coming soon</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-end gap-4 border-t border-black/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-medium tracking-widest text-black/40">
              {current + 1} / {projects.length}
            </span>

            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-black/70 transition-colors duration-300 sm:px-8 sm:text-base lg:text-lg"
            >
              <span
                className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-500 ease-out group-hover:scale-y-100"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                <Icon icon="mdi:github" width={16} height={16} />
                View more on GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </FlowSection>
  );
}

export default Projects;