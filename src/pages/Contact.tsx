import { useMemo, useRef, useState } from "react";

// ------------------------------------------------------------
// Find Work (Contact) Page
// File: src/pages/Contact.tsx
// Purpose: Candidate-facing page with search, categories, featured roles,
//          resources, and an application modal wired to Formspree.
// Notes:
// - Uses existing Tailwind setup + your global hero-gradient class.
// - Tracks key clicks via data attributes (your global click tracker will pick these up).
// - Footer contact uses admin@zolurecruitment.com per approved detail.
// ------------------------------------------------------------

// --- Types ---
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Casual";
  category: "Hospitality" | "Retail" | "Admin" | "Technology" | "Healthcare" | "Finance" | "Education" | "Manufacturing" | "Other";
  tags: string[];
  description: string;
  featured?: boolean;
  remote?: boolean;
};

// --- Mock roles aligned to ZoLu's initial focus (hospitality/retail/entry-level) ---
const JOBS: Job[] = [
  {
    id: "barista-glebe",
    title: "Barista",
    company: "Cafe on the Green",
    location: "Glebe, NSW",
    salary: "$29–$34/hr + tips",
    type: "Casual",
    category: "Hospitality",
    tags: ["Espresso", "Customer Service", "Weekend"],
    description:
      "Seeking an experienced barista with strong milk texturing and customer service. Friendly team, close to transport.",
    featured: true,
  },
  {
    id: "retail-assistant-cbd",
    title: "Retail Sales Assistant",
    company: "Style & Co.",
    location: "Sydney CBD, NSW",
    salary: "$57k–$62k + incentives",
    type: "Full-time",
    category: "Retail",
    tags: ["POS", "Visual Merch", "CRM"],
    description:
      "Help customers find the right fit, maintain merchandising standards, and drive daily sales targets in a high-traffic store.",
    featured: true,
  },
  {
    id: "kitchenhand-newtown",
    title: "Kitchenhand",
    company: "The Corner Deli",
    location: "Newtown, NSW",
    salary: "$27–$31/hr",
    type: "Part-time",
    category: "Hospitality",
    tags: ["Prep", "Dishwashing", "Food Safety"],
    description:
      "Support prep and service in a busy kitchen. Ideal for someone reliable with good pace and hygiene standards.",
  },
  {
    id: "receptionist-parramatta",
    title: "Entry-level Receptionist",
    company: "Local Medical Practice",
    location: "Parramatta, NSW",
    salary: "$55k–$58k + super",
    type: "Full-time",
    category: "Admin",
    tags: ["Phones", "Bookings", "Microsoft 365"],
    description:
      "Front-desk role handling bookings, patient enquiries, and basic admin. Full training provided.",
    featured: true,
  },
  {
    id: "floor-supervisor-bondi",
    title: "Floor Supervisor",
    company: "Beachfront Eatery",
    location: "Bondi, NSW",
    salary: "$65k–$72k + benefits",
    type: "Full-time",
    category: "Hospitality",
    tags: ["Leadership", "Rosters", "Service"],
    description:
      "Lead a small FOH team, coordinate service, and uphold guest experience in a fast-paced venue.",
  },
  {
    id: "retail-teamleader-penrith",
    title: "Retail Team Leader",
    company: "Everyday Goods",
    location: "Penrith, NSW",
    salary: "$60k–$68k + bonus",
    type: "Full-time",
    category: "Retail",
    tags: ["Team Lead", "Inventory", "Customer Service"],
    description:
      "Oversee daily operations, coach team members, and maintain inventory accuracy at a Western Sydney location.",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "remote", label: "Remote" },
  { key: "Full-time", label: "Full-time" },
  { key: "Contract", label: "Contract" },
  { key: "Casual", label: "Casual" },
  { key: "Part-time", label: "Part-time" },
];

export default function Contact() {
  // --- Search state ---
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState("all");

  // --- Modal/app form state ---
  const [openJobId, setOpenJobId] = useState<string | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [appForJob, setAppForJob] = useState<Job | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const industries = useMemo(() => {
    const set = new Set(JOBS.map((j) => j.category));
    return ["", ...Array.from(set)];
  }, []);

  const openJob = (job: Job) => {
    setOpenJobId(job.id);
    setShowApplication(false);
  };

  const closeJob = () => setOpenJobId(null);

  const openApply = (job?: Job) => {
    if (job) setAppForJob(job);
    else if (openJobId) setAppForJob(JOBS.find((j) => j.id === openJobId) || null);
    setShowApplication(true);
    setOpenJobId(null);
  };

  const closeApply = () => setShowApplication(false);

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const q = keyword.trim().toLowerCase();
      const matchQ = !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.tags.join(" ").toLowerCase().includes(q) ||
        j.description.toLowerCase().includes(q);

      const loc = location.trim().toLowerCase();
      const matchLoc = !loc || j.location.toLowerCase().includes(loc);

      const matchInd = !industry || j.category === industry;

      const matchFilter =
        activeFilter === "all" ||
        (activeFilter === "remote" && j.remote) ||
        (activeFilter === j.type);

      return matchQ && matchLoc && matchInd && matchFilter;
    });
  }, [keyword, location, industry, activeFilter]);

  const activeJob = useMemo(() => JOBS.find((j) => j.id === openJobId) || null, [openJobId]);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-dark-gray leading-tight mb-6">
              Find Your Next <span className="text-black">Role</span>
            </h1>
            <p className="text-lg lg:text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Hospitality, retail, and entry-level office roles across Greater Sydney.
              We’ll match you quickly and fairly—no fluff.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-4">
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Job title or keyword"
                  className="form-input p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray"
                />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location (e.g. Parramatta)"
                  className="form-input p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray"
                />
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="form-input p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray"
                >
                  <option value="">All Industries</option>
                  {industries
                    .filter((v) => v)
                    .map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                </select>
                <button
                  className="btn-primary text-white py-4 rounded-lg font-semibold"
                  data-track
                  data-label="findwork_search"
                  onClick={() => {
                    // no-op: filtering is client-side; emit GA if present
                    if ((window as any).gtag) {
                      (window as any).gtag("event", "search", {
                        event_category: "findwork",
                        event_label: `${keyword || ""} | ${location || ""} | ${industry || ""}`,
                      });
                    }
                  }}
                >
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Browse by Category</h2>
            <p className="text-lg lg:text-xl text-dark-gray max-w-3xl mx-auto">
              Explore openings that match your skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "☕", name: "Hospitality" },
              { icon: "🛍️", name: "Retail" },
              { icon: "🗂️", name: "Admin" },
              { icon: "💻", name: "Technology" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "💰", name: "Finance" },
            ].map((c) => (
              <button
                key={c.name}
                className="card-hover bg-cream p-6 rounded-xl text-center"
                onClick={() => setIndustry(c.name as Job["category"])}
              >
                <div className="text-3xl mb-2" aria-hidden>{c.icon}</div>
                <div className="font-semibold text-dark-gray">{c.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured jobs + filters */}
      <section className="py-16 bg-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-2">Featured Opportunities</h2>
              <p className="text-lg text-dark-gray">Hand-picked roles from Sydney employers</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={
                    "filter-btn px-4 py-2 rounded-lg border border-light-gray text-dark-gray font-medium" +
                    (activeFilter === f.key ? " bg-dark-gray text-white" : "")
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filtered.length === 0 && (
              <div className="bg-white p-8 rounded-2xl text-dark-gray">
                No roles match your filters yet. Try clearing filters or email us your CV at
                {" "}
                <a className="underline" href="mailto:admin@zolurecruitment.com">admin@zolurecruitment.com</a>.
              </div>
            )}

            {filtered.map((job) => (
              <article key={job.id} className="job-card bg-white p-8 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-dark-gray mb-2">{job.title}</h3>
                    <p className="text-lg text-dark-gray mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-gray">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                  <span className="bg-cream px-3 py-1 rounded-full text-sm font-medium text-dark-gray">{job.category}</span>
                </div>

                <p className="text-dark-gray mb-4">{job.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="bg-light-gray px-3 py-1 rounded-full text-xs text-dark-gray">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="text-dark-gray font-semibold hover:text-black"
                      onClick={() => openJob(job)}
                    >
                      View Details →
                    </button>
                    <button
                      className="btn-primary text-white px-4 py-2 rounded-lg font-semibold"
                      data-track
                      data-label={`apply_${job.id}`}
                      onClick={() => openApply(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#findwork-application"
              className="btn-primary inline-block text-white px-8 py-4 rounded-lg font-semibold text-lg"
              data-track
              data-label="findwork_view_all"
              onClick={() => openApply()}
            >
              Quick Apply
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Career Resources</h2>
            <p className="text-lg lg:text-xl text-dark-gray max-w-3xl mx-auto">
              Simple tools to help you present well and interview with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Resume Builder (stub) */}
            <div className="card-hover bg-cream p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl" aria-hidden>📄</span>
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Resume Tips</h3>
              <p className="text-dark-gray mb-6">
                Use a clean layout with bullet points focused on outcomes (not duties).
              </p>
              <a
                href="mailto:admin@zolurecruitment.com?subject=Resume%20review%20request"
                className="w-full inline-block text-center bg-dark-gray text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors"
                data-track
                data-label="resume_review_email"
              >
                Ask for a quick review
              </a>
            </div>

            {/* Interview tips */}
            <div className="card-hover bg-light-cream p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl" aria-hidden>🎤</span>
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Interview Tips</h3>
              <p className="text-dark-gray mb-6">
                Prepare one story per key skill (teamwork, problem solving, resilience).
              </p>
              <a
                href="mailto:admin@zolurecruitment.com?subject=Mock%20interview%20request"
                className="w-full inline-block text-center bg-dark-gray text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors"
                data-track
                data-label="mock_interview_email"
              >
                Book a mock interview
              </a>
            </div>

            {/* Salary guide (stub) */}
            <div className="card-hover bg-cream p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl" aria-hidden>💵</span>
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Salary Guide</h3>
              <p className="text-dark-gray mb-6">
                Typical pay ranges for Sydney entry roles; we’ll advise case-by-case.
              </p>
              <a
                href="mailto:admin@zolurecruitment.com?subject=Salary%20advice"
                className="w-full inline-block text-center bg-dark-gray text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors"
                data-track
                data-label="salary_advice_email"
              >
                Ask for advice
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to take the next step?</h2>
          <p className="text-lg lg:text-xl text-light-gray mb-8">
            Send us your resume. We’ll get back to you within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-all"
              onClick={() => openApply()}
              data-track
              data-label="cta_upload_resume"
            >
              Upload Resume
            </button>
            <a
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-gray transition-all"
              href="mailto:admin@zolurecruitment.com?subject=Job%20alerts"
              data-track
              data-label="cta_job_alerts"
            >
              Get Job Alerts
            </a>
          </div>
        </div>
      </section>

      {/* Job details modal */}
      {activeJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-dark-gray mb-2">{activeJob.title}</h2>
                  <p className="text-xl text-dark-gray mb-4">{activeJob.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-dark-gray mb-4">
                    <span>📍 {activeJob.location}</span>
                    <span>💰 {activeJob.salary}</span>
                    <span>⏰ {activeJob.type}</span>
                  </div>
                </div>
                <button onClick={closeJob} className="text-dark-gray hover:text-black" aria-label="Close">
                  ✕
                </button>
              </div>
              <div className="text-dark-gray mb-8">{activeJob.description}</div>
              <div className="flex gap-4">
                <button
                  onClick={() => openApply(activeJob)}
                  className="btn-primary text-white px-8 py-3 rounded-lg font-semibold flex-1"
                  data-track
                  data-label={`apply_modal_${activeJob.id}`}
                >
                  Apply Now
                </button>
                <button
                  onClick={closeJob}
                  className="border-2 border-dark-gray text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-dark-gray hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application modal */}
      {showApplication && (
        <ApplicationModal
          job={appForJob}
          onClose={closeApply}
          resumeInputRef={resumeInputRef}
        />
      )}
    </main>
  );
}

// ------------------------------------------------------------
// Application Modal (Formspree wired)
// ------------------------------------------------------------
function ApplicationModal({
  job,
  onClose,
  resumeInputRef,
}: {
  job: Job | null;
  onClose: () => void;
  resumeInputRef: React.MutableRefObject<HTMLInputElement | null>;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);
    setOk(false);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Include job context
    data.append("job_title", job?.title || "General application");
    data.append("job_id", job?.id || "quick-apply");

    try {
      // POST to Formspree endpoint configured on site
      const resp = await fetch("https://formspree.io/f/myzpqvjo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!resp.ok) throw new Error("Submit failed");

      setOk(true);
      (e.currentTarget as HTMLFormElement).reset();
      if ((window as any).gtag) {
        (window as any).gtag("event", "lead", {
          event_category: "form",
          event_label: job?.id || "quick-apply",
        });
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-dark-gray">
              {job ? `Apply for ${job.title}` : "Quick Apply"}
            </h2>
            <button onClick={onClose} className="text-dark-gray hover:text-black" aria-label="Close">
              ✕
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-6" id="findwork-application">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-dark-gray font-medium mb-2">First Name *</label>
                <input name="first_name" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
              </div>
              <div>
                <label className="block text-dark-gray font-medium mb-2">Last Name *</label>
                <input name="last_name" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
              </div>
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Email Address *</label>
              <input type="email" name="email" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Phone Number *</label>
              <input type="tel" name="phone" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Resume *</label>
              <div className="border-2 border-dashed border-light-gray rounded-lg p-8 text-center">
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  name="resume"
                  className="hidden"
                  id="resumeUpload"
                  required
                />
                <label htmlFor="resumeUpload" className="cursor-pointer">
                  <div className="text-4xl mb-4">📄</div>
                  <p className="text-dark-gray mb-2">Click to upload your resume</p>
                  <p className="text-sm text-light-gray">PDF, DOC, or DOCX (Max 5MB)</p>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Cover Letter</label>
              <textarea
                rows={4}
                name="cover_letter"
                className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray"
                placeholder="Tell us why you're interested..."
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn-primary text-white px-8 py-3 rounded-lg font-semibold flex-1" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="border-2 border-dark-gray text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-dark-gray hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>

            {ok && (
              <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                Application submitted successfully! We’ll be in touch within 48 hours.
              </p>
            )}
            {error && (
              <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
