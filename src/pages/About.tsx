// src/pages/About.tsx
import { useEffect } from "react";
import "./about.css"; // step 2

export default function About() {
  // Smooth scrolling for any #anchors on this page (optional)
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const targetSel = a.getAttribute("href") || "";
      const target = document.querySelector(targetSel);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    links.forEach((l) => l.addEventListener("click", onClick));
    return () => links.forEach((l) => l.removeEventListener("click", onClick));
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-dark-gray leading-tight mb-6">
              About <span className="text-black">ZoLu Recruitment</span>
            </h1>
            <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
              We&apos;re passionate about creating meaningful connections between exceptional talent and forward-thinking companies.
              Our story is one of dedication, expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark-gray mb-8">Our Mission</h2>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                To bridge the gap between exceptional professionals and innovative companies by providing
                personalized recruitment solutions that create lasting partnerships and drive mutual success.
              </p>
              <p className="text-lg text-dark-gray leading-relaxed">
                We believe that the right match can transform careers and businesses alike. Our mission is to
                make those transformative connections happen through expertise, integrity, and genuine care.
              </p>
            </div>

            <div className="bg-cream p-12 rounded-2xl">
              <h3 className="text-3xl font-bold text-dark-gray mb-6">Our Vision</h3>
              <p className="text-lg text-dark-gray leading-relaxed">
                To be the most trusted recruitment partner, known for our commitment to quality,
                innovation, and the success of both candidates and clients in an ever-evolving job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Core Values</h2>
            <p className="text-xl text-dark-gray max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients and candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="card-hover bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Excellence</h3>
              <p className="text-dark-gray">
                We strive for excellence in every interaction, ensuring the highest quality service and outcomes.
              </p>
            </div>

            {/* Integrity */}
            <div className="card-hover bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Integrity</h3>
              <p className="text-dark-gray">
                Honesty and transparency form the foundation of all our relationships and business practices.
              </p>
            </div>

            {/* Partnership */}
            <div className="card-hover bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 14C12.42 14 16 15.79 16 18V20H0V18C0 15.79 3.58 14 8 14ZM16 14C20.42 14 24 15.79 24 18V20H18V18.5C18 16.9 17.37 15.44 16.29 14.37C16.2 14.25 16.1 14.13 16 14Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Partnership</h3>
              <p className="text-dark-gray">
                We build long-term partnerships based on mutual respect, trust, and shared success.
              </p>
            </div>

            {/* Innovation */}
            <div className="card-hover bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Innovation</h3>
              <p className="text-dark-gray">
                We embrace new technologies and methodologies to deliver cutting-edge recruitment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-dark-gray mb-8">Our Story</h2>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                ZoLu Recruitment was founded by <strong>Diana Zola</strong> and <strong>Michael Luongo</strong>, combining extensive experience in sales leadership, recruitment, and business operations. Having worked side by side for many years, we built and managed high-performing teams that consistently delivered strong outcomes across Sydney.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Through this work we developed deep expertise in recruitment, training, and workforce development, while seeing a recurring challenge for business owners: the need for reliable staff sourced quickly and effectively, without complexity.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                We shifted our focus fully to recruitment, applying our proven ability to identify talent who not only interview well but also perform in the workplace. Today, ZoLu Recruitment delivers transparent, outcome-driven hiring solutions backed by defined scopes and replacement guarantees.
              </p>
              <p className="text-lg text-dark-gray leading-relaxed">
                Supported by best-in-class infrastructure and systems, we combine personal expertise with enterprise-level capability - providing a recruitment service designed to deliver lasting value for businesses across Sydney and beyond.
              </p>
            </div>

            <div className="bg-light-cream p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-dark-gray mb-8">Key Milestones</h3>
              <div className="space-y-8">
                <div className="timeline-item">
                  <h4 className="font-semibold text-dark-gray mb-2">2025 — ZoLu Recruitment formed</h4>
                  <p className="text-dark-gray">
                    Trading as ZoLu Recruitment under Amber Recruitment Pty Ltd; initial focus on Western Sydney.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-semibold text-dark-gray mb-2">Aug 2025 — Guarantees & packages defined</h4>
                  <p className="text-dark-gray">
                    Scope-based packages finalised with clear inclusions and <strong>7-, 14-, and 30-day</strong> replacement guarantees.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-semibold text-dark-gray mb-2">Aug 2025 — Website & analytics live</h4>
                  <p className="text-dark-gray">
                    React + Vite on Vercel; GA4 installed (ID <code>G-Z152CRC0QF</code>); contact form via Formspree with event tracking.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-semibold text-dark-gray mb-2">Sep 2025 — Sydney launch scope</h4>
                  <p className="text-dark-gray">
                    Rolling out affordable hiring for cafés, restaurants, and retail across Sydney & NSW; Xero Starter configured.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-semibold text-dark-gray mb-2">Planned — Phased expansion</h4>
                  <p className="text-dark-gray">
                    Grow service coverage across NSW, then expand to Melbourne once Sydney operations are humming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-light-gray mb-8">
            Whether you&apos;re looking for exceptional talent or your next career opportunity, we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-gray transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
