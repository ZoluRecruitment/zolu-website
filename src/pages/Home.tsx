import { useEffect, useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scrolling
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const targetSel = a.getAttribute("href") || "";
      const target = document.querySelector(targetSel);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileOpen(false);
      }
    };
    links.forEach((l) => l.addEventListener("click", onClick));
    return () => links.forEach((l) => l.removeEventListener("click", onClick));
  }, []);

  // Active nav highlighting
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]'));
    function updateActiveNav() {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach((link) => {
        const selector = link.getAttribute("href") || "";
        const section = document.querySelector(selector) as HTMLElement | null;
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const isActive = scrollPosition >= top && scrollPosition < bottom;

        link.classList.remove("border-b-2", "border-brown-900", "text-brown-900");
        link.classList.add("text-brown-600");

        if (isActive) {
          link.classList.remove("text-brown-600");
          link.classList.add("text-brown-900", "border-b-2", "border-brown-900");
        }
      });
    }
    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav);
    return () => window.removeEventListener("scroll", updateActiveNav);
  }, []);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo placeholder */}
            <div className="flex items-center">
              <div className="bg-brown-900 text-white px-4 py-2 rounded-lg font-bold text-lg">
                LOGO
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-brown-900 hover:text-brown-800 px-3 py-2 text-sm font-medium border-b-2 border-brown-900"
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className="text-brown-600 hover:text-brown-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#find-staff"
                  className="text-brown-600 hover:text-brown-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FIND STAFF
                </a>
                <a
                  href="#find-work"
                  className="text-brown-600 hover:text-brown-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FIND WORK
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="text-brown-900 hover:text-brown-800 p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`md:hidden ${mobileOpen ? "" : "hidden"} bg-white border-t border-warm-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="text-brown-900 block px-3 py-2 text-base font-medium border-l-4 border-brown-900 bg-warm-100"
            >
              HOME
            </a>
            <a href="#about" className="text-brown-600 hover:text-brown-900 block px-3 py-2 text-base font-medium">
              ABOUT
            </a>
            <a href="#find-staff" className="text-brown-600 hover:text-brown-900 block px-3 py-2
