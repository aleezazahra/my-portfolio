import React from 'react';

// Assuming you have a transparent PNG of a sakura branch in your public folder.
// If not, you will need to acquire one and place it here.
const SAKURA_BRANCH_URL = '/sakura-branch.png'; // Place your branch image here

// Number of floating petals to generate
const PETAL_COUNT = 15;

function HeroSection() {
  // Generate array for floating petals with random positions and animation delays
  const floatingPetals = Array.from({ length: PETAL_COUNT }).map((_, i) => ({
    id: i,
    // Random horizontal position (0% to 100%)
    left: `${Math.random() * 100}%`,
    // Random vertical start position (-10% to -50% so they start above screen)
    top: `${-(Math.random() * 40 + 10)}%`,
    // Random animation duration (6s to 12s)
    duration: `${Math.random() * 6 + 6}s`,
    // Random animation delay (0s to 5s)
    delay: `${Math.random() * 5}s`,
    // Random scale (0.5 to 1.0)
    scale: Math.random() * 0.5 + 0.5,
    // Random rotation speed
    rotate: Math.random() * 360,
  }));

  return (
    <div className="relative w-full min-h-screen bg-pink-50 overflow-hidden font-sans text-gray-800 flex flex-col items-center justify-center isolate">
      
      {/* ==============================
          Background Elements
          ============================== */}
      
      {/* Top Left Branch - Rotated slightly */}
      <img 
        src={SAKURA_BRANCH_URL} 
        alt="Cherry Blossom Branch" 
        className="absolute -top-16 -left-20 w-3/4 md:w-1/2 max-w-2xl opacity-90 rotate-12 pointer-events-none z-0"
      />
      
      {/* Top Right Branch - Flipped and Rotated */}
      <img 
        src={SAKURA_BRANCH_URL} 
        alt="Cherry Blossom Branch" 
        className="absolute -top-20 -right-30 w-3/4 md:w-1/2 max-w-2xl opacity-90 -scale-x-100 -rotate-12 pointer-events-none z-0"
      />
      
      {/* Optional: A subtle background overlay gradient to deepen the pink at edges */}
      <div className="absolute inset-0 bg-gradient-radial from-white/0 via-pink-50/0 to-pink-100/30 pointer-events-none z-0"></div>


      {/* ==============================
          Foreground Elements (Text & Buttons)
          ============================== */}

      <main className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 max-w-5xl mx-auto mt-40 md:mt-48">
        
        {/* Sub-header text */}
        <h2 className="text-sm tracking-[0.3em] text-pink-600 uppercase mb-5">
          Hi, I'm Aleeza
        </h2>
        
        {/* Main Headline - large serif script font */}
        <h1 className="font-serif text-5xl md:text-7xl text-gray-900 mb-10 leading-tight font-normal tracking-tight">
          Crafting soft, <br className="hidden sm:block"/> thoughtful software
        </h1>
        
        {/* Body Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          An 18 year old full-stack developer who likes her interfaces the way she likes her tea — a little sweet, carefully made, and never rushed.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5">
          <button className="bg-pink-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-colors shadow-sm">
            View My Work
          </button>
          <button className="bg-white text-pink-500 px-10 py-4 rounded-full text-lg font-medium hover:bg-pink-50 border border-pink-200 transition-colors shadow-inner">
            Get in Touch
          </button>
        </div>
      </main>


      {/* ==============================
          Falling Petals Animation
          ============================== */}

      <div className="absolute inset-0 w-full h-full pointer-events-none z-5">
        {floatingPetals.map(petal => (
          <div
            key={petal.id}
            className="absolute w-8 h-8 bg-contain bg-no-repeat bg-center opacity-80 animate-fall"
            style={{
              left: petal.left,
              top: petal.top,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
              transform: `scale(${petal.scale}) rotate(${petal.rotate}deg)`,
              // Use a data-uri or a simple div with border-radius as a fallback.
              // For best results, use a transparent PNG of a single petal here:
              backgroundImage: "url('/single-petal-asset.png')", 
              // Fallback style if image asset isn't ready:
              // backgroundColor: "#F9A8D4",
              // borderRadius: "85% 15% 75% 25% / 50% 70% 30% 50%" 
            }}
          />
        ))}
      </div>


      {/* ==============================
          Bottom Scroll Indicator
          ============================== */}

      <footer className="absolute bottom-8 w-full text-center z-10 pointer-events-none">
        <span className="text-sm text-gray-500 tracking-widest uppercase opacity-70">
          Scroll
        </span>
        <div className="h-16 w-px bg-gray-300 mx-auto mt-2 opacity-50"></div>
      </footer>

    </div>
  );
}

export default HeroSection;