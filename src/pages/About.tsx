import { useEffect } from "react";

export default function About() {
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
    <main className="bg-white text-dark-gray">
      {/* Hero */}
      <section className="bg-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              About <span className="text-black">ZoLu Recruitment</span>
            </h1>
            <p className="text-lg text-[#444] mb-8">
              Sydney-born and focused on practical hiring outcomes for small businesses. We keep it simple: clear scope, quick turnarounds, and guarantees that give owners confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our story</h2>
          <p className="mb-4 text-lg leading-relaxed">
            ZoLu Recruitment was founded through the professional partnership of <strong>Diana Zola</strong> and <strong>Michael Luongo</strong>. Combining extensive experience in sales leadership, recruitment, and business operations, and having worked side by side for many years in the direct sales industry, we built and managed high-performing teams that consistently delivered strong outcomes for clients and businesses across Sydney.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Through this work, we developed deep expertise in recruitment, training, and workforce development. Along the way, we saw the same challenge faced by business owners time and again: the need for dependable staff sourced quickly and effectively, without unnecessary complexity or uncertainty.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Recognising this gap, we shifted our focus fully to recruitment, applying our proven ability to identify talent who not only perform well in interviews but also deliver in the workplace. Today, through ZoLu Recruitment, we provide businesses with clear, transparent, and outcome-driven hiring solutions, supported by defined scopes and replacement guarantees.
          </p>
          <p className="text-lg leading-relaxed">
            In partnership with <strong>Purple Patch Consulting</strong>, we are backed by best-in-class infrastructure, systems, and support — combining our personal expertise with enterprise-level capability. The result is a recruitment service positioned to deliver high-quality outcomes and long-term value for clients across Sydney and beyond.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-light-gray p-6">
            <h3 className="font-semibold mb-2">Entry-level roles</h3>
            <p className="text-[15px] text-[#444]">Baristas, kitchenhands, retail assistants, and reception—fast shortlists, simple process.</p>
          </div>
          <div className="rounded-2xl border border-light-gray p-6">
            <h3 className="font-semibold mb-2">Shortlist support</h3>
            <p className="text-[15px] text-[#444]">Phone screening, basic checks, and neat candidate packs so you can decide quickly.</p>
          </div>
          <div className="rounded-2xl border border-light-gray p-6">
            <h3 className="font-semibold mb-2">Interview help</h3>
            <p className="text-[15px] text-[#444]">Scheduling and structure to keep things moving—no bloat, just momentum.</p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how" className="py-16 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">How we work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Brief", "Shortlist", "Select", "Guarantee"].map((step, i) => (
              <div key={step} className="rounded-2xl bg-white border border-light-gray p-6">
                <div className="text-sm text-[#666] mb-1">Step {i + 1}</div>
                <div className="font-semibold mb-2">{step}</div>
                <p className="text-[15px] text-[#444]">
                  {i === 0 && "Share your role, must-haves, and nice-to-haves. We agree scope up-front."}
                  {i === 1 && "We source and phone-screen candidates, then send you a tidy shortlist."}
                  {i === 2 && "You interview your top picks; we can assist with scheduling if needed."}
                  {i === 3 && "If it doesn’t work out, our 7/14/30-day replacement guarantees apply."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section id="milestones" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Key milestones</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-light-gray p-6">
              <div className="text-sm text-[#666]">2025</div>
              <div className="font-semibold mb-2">Formation</div>
              <p className="text-[15px] text-[#444]">ZoLu Recruitment formed under Amber Recruitment Pty Ltd; Western Sydney focus established.</p>
            </div>
            <div className="rounded-2xl border border-light-gray p-6">
              <div className="text-sm text-[#666]">Aug 2025</div>
              <div className="font-semibold mb-2">Packages clarified</div>
              <p className="text-[15px] text-[#444]">Scope-based tiers with clear inclusions; guarantees set at 7, 14, 30 days.</p>
            </div>
            <div className="rounded-2xl border border-light-gray p-6">
              <div className="text-sm text-[#666]">Aug 2025</div>
              <div className="font-semibold mb-2">Website + analytics</div>
              <p className="text-[15px] text-[#444]">Site live on Vercel; GA4 (G-Z152CRC0QF) and Formspree tracking implemented.</p>
            </div>
            <div className="rounded-2xl border border-light-gray p-6">
              <div className="text-sm text-[#666]">Sep 2025 →</div>
              <div className="font-semibold mb-2">NSW expansion</div>
              <p className="text-[15px] text-[#444]">Sydney launch scope finalised; phased NSW expansion then Melbourne planned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What we believe</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-[15px]">
            <li className="rounded-2xl border border-light-gray p-6 bg-white">Simple scope beats complexity.</li>
            <li className="rounded-2xl border border-light-gray p-6 bg-white">Speed matters, but fit matters more.</li>
            <li className="rounded-2xl border border-light-gray p-6 bg-white">Transparency builds trust—for clients and candidates.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-light-gray p-8">
          <div>
            <h3 className="text-2xl font-semibold">Ready to brief a role?</h3>
            <p className="text-[#444] mt-2">We’ll confirm scope, move quickly, and keep you updated—without the fluff.</p>
          </div>
          <a
            href="/contact"
            data-track
            data-label="about_cta_footer_start_a_brief"
            className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Start a brief
          </a>
        </div>
      </section>
    </main>
  );
}
