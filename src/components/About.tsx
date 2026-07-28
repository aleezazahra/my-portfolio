import { FlowSection } from "./Flowart";
import { Icon } from "@iconify/react";

const socials = [
  { name: "Pinterest", href: "https://pinterest.com/yourusername", icon: "mdi:pinterest" },
  { name: "Letterboxd", href: "https://letterboxd.com/yourusername", icon: "simple-icons:letterboxd" },
  { name: "YouTube", href: "https://youtube.com/@yourusername", icon: "mdi:youtube" },
  { name: "GitHub", href: "https://github.com/yourusername", icon: "mdi:github" },
  { name: "Instagram", href: "https://instagram.com/yourusername", icon: "mdi:instagram" },
  { name: "Fable", href: "https://fable.co/yourusername", icon: "mdi:book-open-page-variant-outline" },
  { name: "Discord", href: "https://discord.com/users/your-user-id", icon: "mdi:discord" },
] as const;

function About() {
  return (
    <FlowSection
      aria-label="About me"
      pin={true}                     // ensures it behaves like the others
      style={{ backgroundColor: "#FFFFFF", color: "#000" }}
    >
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <ul className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {socials.map(({ name, href, icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-black/10 px-5 py-4 text-left text-lg transition-all hover:-translate-y-0.5 hover:border-black/30 hover:bg-black/5"
                aria-label={`Visit my ${name} profile`}
              >
                <Icon icon={icon} width={28} height={28} aria-hidden="true" />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </FlowSection>
  );
}

export default About;
