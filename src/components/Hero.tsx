import { useEffect, useRef, useState } from "react";
import Background3D from "./Background3D";

function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Karachi",
      }).format(new Date());
      setTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCoords({
      x: Math.round(event.clientX - rect.left),
      y: Math.round(event.clientY - rect.top),
    });
  };

  return (
    <div
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#05060F] overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Background3D />

      <div className="relative z-20 flex flex-col justify-between min-h-screen px-6 sm:px-10 pt-24 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          <h1
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-white text-2xl sm:text-3xl font-medium leading-tight"
          >
            Design &<br />
            Development
          </h1>
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-white/60 text-xs sm:text-sm leading-relaxed"
          >
            Thinking in components.
            <br />
            Shipping with care.
          </p>
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-white/60 text-xs sm:text-sm leading-relaxed"
          >
            I'm Aleeza, an 18 year old full-stack developer building resume
            tools, storefronts, and the odd experimental interface along the
            way.
          </p>
        </div>

        <div className="mt-10 sm:mt-0">
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-white font-semibold uppercase leading-[0.95] text-[13vw] sm:text-[7vw] tracking-tight"
          >
            I Build
            <br />
            <span className="text-[#FF3FA4]">Craft &amp; Code</span>
            <br />
            That Ships
          </h2>
        </div>

        <div
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="flex items-center justify-between text-white/50 text-[11px] sm:text-xs tracking-wider"
        >
          <span>GMT+5 PK {time}</span>
          <span>
            {String(coords.x).padStart(4, "0")} X{" "}
            {String(coords.y).padStart(4, "0")} Y
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;