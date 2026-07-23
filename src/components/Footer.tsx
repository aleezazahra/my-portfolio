function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#05060F] px-6 sm:px-10 py-8 border-t border-white/10 flex items-center justify-between">
      <span
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="text-white/40 text-xs"
      >
        © 2026 Aleeza Zahra
      </span>
      <button
        onClick={handleScrollTop}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="text-white/40 text-xs hover:text-[#FF3FA4] transition-colors duration-200"
      >
        Back to top ↑
      </button>
    </footer>
  );
}

export default Footer;