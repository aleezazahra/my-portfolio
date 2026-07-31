import { FlowSection } from "./Flowart";
import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const socials = [
  { name: "Pinterest", href: "https://pinterest.com/yourusername", icon: "mdi:pinterest" },
  { name: "Letterboxd", href: "https://letterboxd.com/yourusername", icon: "simple-icons:letterboxd" },
  { name: "YouTube", href: "https://youtube.com/@aleeza011", icon: "mdi:youtube" },
  { name: "GitHub", href: "https://github.com/aleezazahra", icon: "mdi:github" },
  { name: "Instagram", href: "https://instagram.com/yourusername", icon: "mdi:instagram" },
  { name: "Fable", href: "https://fable.co/yourusername", icon: "mdi:book-open-page-variant-outline" },
  { name: "Discord", href: "https://discord.com/users/aleezazahra", icon: "mdi:discord" },
] as const;

function About() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <FlowSection
      aria-label="About me"
      pin={true}                     
      style={{ backgroundColor: "#000000", color: "#fff" }}
    >
      <div className="flex min-h-[90vh] flex-col justify-between px-6 py-12 md:px-20 lg:px-32">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 w-full max-w-7xl mx-auto my-auto">
          
          <div className="flex-1 max-w-2xl w-full">
            <h2 className="text-[clamp(3rem,10vw,9rem)] font-bold tracking-tight leading-[0.85] uppercase text-white mb-10">
              Wanna yap?
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors text-lg"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors text-lg"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                />
              </div>

              {status && (
                <p className="text-sm text-white/70">{status}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="border border-white/30 px-10 py-3 text-white uppercase tracking-wider text-sm hover:bg-white mb-20 hover:text-black transition-all rounded-4xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="flex lg:flex-col mt-10 mr-20 items-center gap-5 shrink-0 overflow-x-auto lg:overflow-visible py-4">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10"
                aria-label={`Visit my ${name} profile`}
              >
                <Icon icon={icon} width={24} height={24} aria-hidden="true" />
              </a>
            ))}
          </div>

        </div>

        <div className="w-full text-center text-xs text-white/40 pt-8 border-t border-white/10">
          © 2026 Aleeza Zahra
        </div>
      </div>
    </FlowSection>
  );
}

export default About;