import { useEffect, useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scrolling
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );
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
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')
    );
    function updateActiveNav() {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach((link) => {
        const selector = link.getAttribute("href") || "";
        const section = document.querySelector(selector) as HTMLElement | null;
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const isActive = scrollPosition >= top && scrollPosition < bottom;
        link.classList.remove("border-b-2", "border-dark-gray", "text-dark-gray");
        link.classList.add("text-light-gray");
        if (isActive) {
          link.classList.remove("text-light-gray");
          link.classList.add("text-dark-gray", "border-b-2", "border-dark-gray");
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
      <nav className="bg-white shadow-sm border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-dark-gray text-white px-4 py-2 rounded-lg font-bold text-lg">
                LOGO
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-dark-gray border-b-2 border-dark-gray px-3 py-2 text-sm font-medium">
                  HOME
                </a>
                <a href="#about" className="text-light-gray hover:text-dark-gray px-3 py-2 text-sm font-medium">
                  ABOUT
                </a>
                <a href="#find-staff" className="text-light-gray hover:text-dark-gray px-3 py-2 text-sm font-medium">
                  FIND STAFF
                </a>
                <a href="#find-work" className="text-light-gray hover:text-dark-gray px-3 py-2 text-sm font-medium">
                  FIND WORK
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="text-dark-gray hover:text-black p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${mobileOpen ? "" : "hidden"} bg-white border-t border-light-gray`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium border-l-4 border-dark-gray bg-cream text-dark-gray">
              HOME
            </a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-light-gray hover:text-dark-gray">
              ABOUT
            </a>
            <a href="#find-staff" className="block px-3 py-2 text-base font-medium text-light-gray hover:text-dark-gray">
              FIND STAFF
            </a>
            <a href="#find-work" className="block px-3 py-2 text-base font-medium text-light-gray hover:text-dark-gray">
              FIND WORK
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-gray mb-6">
            Connecting Talent
            <span className="block text-black">With Opportunity</span>
          </h1>
          <p className="text-xl text-dark-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between exceptional professionals and forward-thinking companies, creating partnerships that drive success for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dark-gray hover:bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Find Staff
            </button>
            <button className="bg-white hover:bg-cream text-dark-gray border-2 border-dark-gray px-8 py-4 rounded-lg font-semibold text-lg">
              Find Work
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Why Choose Us</h2>
            <p className="text-lg text-light-gray max-w-2xl mx-auto">
              We make the connection process simple, efficient, and successful for both employers and job seekers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Expert Matching */}
            <div className="text-center p-8 bg-light-cream rounded-xl">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">Expert Matching</h3>
              <p className="text-light-gray">Our advanced matching system connects the right talent with the right opportunities based on skills, culture, and goals.</p>
            </div>
            {/* Fast Results */}
            <div className="text-center p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">Fast Results</h3>
              <p className="text-light-gray">Streamlined processes and dedicated support ensure quick turnaround times without compromising on quality.</p>
            </div>
            {/* Proven Success */}
            <div className="text-center p-8 bg-light-cream rounded-xl">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">Proven Success</h3>
              <p className="text-light-gray">Thousands of successful placements and long-term partnerships demonstrate our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="find-staff" className="py-20 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-light-gray mb-8 max-w-2xl mx-auto">
            Whether you're looking for top talent or your next career opportunity, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-cream text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg">
              Post a Job
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-dark-gray text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Browse Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="find-work" className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-white text-black px-4 py-2 rounded-lg font-bold text-lg mb-4 inline-block">
                LOGO
              </div>
              <p className="text-light-gray">Connecting talent with opportunity, building successful partnerships for the future.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-light-gray hover:text-white">Home</a></li>
                <li><a href="#about" className="text-light-gray hover:text-white">About</a></li>
                <li><a href="#find-staff" className="text-light-gray hover:text-white">Find Staff</a></li>
                <li><a href="#find-work" className="text-light-gray hover:text-white">Find Work</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-gray hover:text-white">Recruitment</a></li>
                <li><a href="#" className="text-light-gray hover:text-white">Job Placement</a></li>
                <li><a href="#" className="text-light-gray hover:text-white">Career Consulting</a></li>
                <li><a href="#" className="text-light-gray hover:text-white">Talent Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-light-gray">info@yourcompany.com</li>
                <li className="text-light-gray">+1 (555) 123-4567</li>
                <li className="text-light-gray">123 Business Ave<br/>City, State 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-light-gray mt-8 pt-8 text-center">
            <p className="text-light-gray">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
