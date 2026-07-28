import { useState } from "react";
import FlowArt, { FlowSection } from "../src/components/Flowart";
import { ChevronDown, Menu, X ,ArrowUpRight} from "lucide-react";
import myResume from "../src/assets/my resume2.pdf";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 z-[9999]  p-3 text-white transition-all hover:scale-105"
      >
        {open ? <X size={40} /> : <Menu size={45} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black text-white">
          <div className="flex flex-col items-center gap-8 text-5xl font-bold uppercase">
            <button onClick={() => setOpen(false)}>About</button>
            <button onClick={() => setOpen(false)}>Projects</button>
            <button onClick={() => setOpen(false)}>Experience</button>
            <button onClick={() => setOpen(false)}>Contact</button>
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
    text-[clamp(3.5rem,7vw+13vh,11rem)]
    
    text-white
    font-bold
    ml-20
    mix-blend-difference uppercase
  "
>
  Aleeza

  Zahra
</h1>

    <p
      className="
        mt-2 mr-6 max-w-xl text-center tracking-[0.35em] text-xl
        text-white mix-blend-difference leading-relaxed
      "
    >
     18 y/o TypeScript Developer
    </p>

    <div className="mt-8 flex gap-5">
      <button className="relative overflow-hidden rounded-full bg-black border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.35em] group">
        <span className="absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-out group-hover:h-full"></span>
        <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-black">
          Contact
        </span>
      </button>
      <a
        href={myResume}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-full border border-white/25 px-8 py-3 text-xs uppercase tracking-[0.35em] group"
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


      <FlowSection aria-label="La mission" style={{ backgroundColor: '#FFFFFF', color: '#fff' }}>
       
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] text-black uppercase tracking-tight"
          >
            I build 
            <br />
            Simple and 
            <br />
            Clean.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          A global community built for artists, by artists. We&apos;re rewriting the rules of how
          creative work gets seen, shared, and valued.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Discovery</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Human-curated collections that put real eyes on real art. No algorithms deciding your
              fate.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Community</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Find collaborators, mentors, and fellow creatives who push your work forward.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Value</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Fair pricing. Transparent commissions. Artists keep what they earn. Always.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Exhibitions</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Virtual and physical showcases curated from our global network.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Mentorship</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Paired guidance from established artists who&apos;ve walked the path.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Residencies</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Access funded creative retreats around the world.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Every feature we build starts with one question — does this serve the artist?
        </p>
      </FlowSection>

      <FlowSection aria-label="Comment ça marche" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How it works</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Show
            <br />
            Up.
            <br />
            Stand
            <br />
            Out.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Three steps. Zero complexity. Your creative career starts moving the moment you sign up.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Upload</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Drag, drop, done. Your portfolio goes live in seconds with full creative control.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Connect</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Match with collectors, galleries, and brands actively looking for your style.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Grow</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Track engagement, manage commissions, and scale your practice — all in one place.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">04 — Sell</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Set your prices, manage editions, handle licensing. Built-in commerce tools.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">05 — Collaborate</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Find your people. Joint projects, split commissions, shared studios.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">06 — Evolve</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Your practice changes. Your platform should too. Flexible tools that adapt.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="La vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The vision</p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Future
            <br />
            Of
            <br />
            Art
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We&apos;re not just building a platform. We&apos;re building a movement.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">10K+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Artists from 80 countries already shaping the future with us.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">$2M+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Paid directly to creators in our first year. Zero hidden fees.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">100%</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Artist-owned. Every decision we make starts with the creator.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          The art world has been broken for decades. Galleries take 50%. Algorithms bury talent.
          We&apos;re here to change that — permanently.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Open access</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              No invite codes. No waiting lists. If you make art, you belong here.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Global reach</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Your work seen in 120+ countries from day one.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Artist-first economics</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              You keep 90% of every sale. The remaining 10% funds the platform and the mission.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Nous rejoindre" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Join us</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Ready
            <br />
            To
            <br />
            Begin?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Take control of your creative journey. Join now and let&apos;s shape the future of the art
          world together.
        </p>
      </FlowSection>
    </FlowArt>
    </>
  );
}