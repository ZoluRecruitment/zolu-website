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
    <div className="bg-warm-50 text-brown-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-brown-900 text-white px-4 py-2 rounded-lg font-bold text-lg">LOGO</div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-brown-900 hover:text-brown-800 px-3 py-2 text-sm font-medium border-b-2 border-brown-900">HOME</a>
                <a href="#about" className="text-brown-600 hover:text-brown-900 px-3 py-2 text-sm font-medium transition-colors">ABOUT</a>
                <a href="#find-staff" className="text-brown-600 hover:text-brown-900 px-3 py-2 text-sm font-medium transition-colors">FIND STAFF</a>
                <a href="#find-work" className="text-brown-600 hover:text-brown-900 px-3 py-2 text-sm font-medium transition-colors">FIND WORK</a>
              </div>
            </div>

            {/* Mobile button */}
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
            <a href="#home" className="text-brown-900 block px-3 py-2 text-base font-medium border-l-4 border-brown-900 bg-warm-100">HOME</a>
            <a href="#about" className="text-brown-600 hover:text-brown-900 block px-3 py-2 text-base font-medium">ABOUT</a>
            <a href="#find-staff" className="text-brown-600 hover:text-brown-900 block px-3 py-2 text-base font-medium">FIND STAFF</a>
            <a href="#find-work" className="text-brown-600 hover:text-brown-900 block px-3 py-2 text-base font-medium">FIND WORK</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Connecting Talent <br className="hidden sm:block" />
            <span className="text-amber-500">With Opportunity</span>
          </h1>
          <p className="mt-4 max-w-2xl text-brown-800">
            We bridge the gap between exceptional professionals and forward-thinking companies, creating partnerships that drive success for everyone.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#find-staff" className="px-5 py-3 rounded-md bg-brown-900 text-white font-medium">Find Staff</a>
            <a href="#find-work" className="px-5 py-3 rounded-md bg-amber-500 text-brown-900 font-medium">Find Work</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold">Why Choose Us</h2>
          <p className="mt-2 text-center text-brown-700">
            We make the connection process simple, efficient, and successful for both employers and job seekers.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-warm-100 p-6 shadow-sm">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="font-semibold mb-1">Expert Matching</h3>
              <p className="text-brown-700 text-sm">
                Advanced matching connects the right talent with the right opportunities based on skills, culture, and goals.
              </p>
            </div>
            <div className="rounded-2xl bg-warm-100 p-6 shadow-sm">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold mb-1">Fast Results</h3>
              <p className="text-brown-700 text-sm">
                Streamlined processes and dedicated support ensure quick turnarounds without compromising on quality.
              </p>
            </div>
            <div className="rounded-2xl bg-warm-100 p-6 shadow-sm">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold mb-1">Proven Success</h3>
              <p className="text-brown-700 text-sm">
                Thousands of successful placements and long-term partnerships demonstrate our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK CTA BAND */}
      <section className="bg-brown-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to Get Started?</h2>
          <p className="mt-2 text-warm-200 max-w-2xl">
            Whether you’re looking for top talent or your next career opportunity, we’re here to help you succeed.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#find-staff" className="px-5 py-3 rounded-md bg-white text-brown-900 font-medium">Post a Job</a>
            <a href="#find-work" className="px-5 py-3 rounded-md bg-amber-500 text-brown-900 font-medium">Browse Opportunities</a>
          </div>
        </div>
      </section>

      {/* FIND STAFF */}
      <section id="find-staff" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Find Staff</h2>
          <p className="mt-2 text-brown-700 max-w-2xl">
            Tell us what you need and we’ll shortlist quality candidates with clear scope and dependable replacement guarantees.
          </p>
          {/* Placeholder content – replace with your real form/sections */}
          <div className="mt-6 rounded-xl border border-warm-200 p-6 bg-white">Your “Find Staff” content goes here.</div>
        </div>
      </section>

      {/* FIND WORK */}
      <section id="find-work" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Find Work</h2>
          <p className="mt-2 text-brown-700 max-w-2xl">
            Browse open roles and apply in minutes. We’ll match you with teams that fit your skills and goals.
          </p>
          <div className="mt-6 rounded-xl border border-warm-200 p-6 bg-white">Your “Find Work” content goes here.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-warm-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-brown-700 flex items-center justify-between">
          <span>© {new Date().getFullYear()} ZoLu Recruitment — Amber Recruitment Pty Ltd</span>
          <span className="inline-flex items-center gap-3">
            Sydney NSW • <a className="underline underline-offset-2" href="mailto:hello@zolurecruitment.com">hello@zolurecruitment.com</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
