function Navbar() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 sm:px-10 py-5">
      <a
        href="#top"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="text-white text-sm tracking-[0.2em] uppercase"
      >
        Aleeza.dev
      </a>
      <div className="flex gap-6 sm:gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-white/70 text-xs sm:text-sm tracking-[0.15em] uppercase hover:text-[#FF3FA4] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;