import { useMemo, useRef, useState } from "react";
import QuickApplyModal from "../components/QuickApplyModal";

// ------------------------------------------------------------
// Find Work (Contact) Page
// File: src/pages/Contact.tsx
// Purpose: Candidate-facing page with search, categories, featured roles,
//          resources, and an application modal wired to Formspree.
// ------------------------------------------------------------

// --- Types ---
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Casual";
  category:
    | "Hospitality"
    | "Retail"
    | "Admin"
    | "Technology"
    | "Healthcare"
    | "Finance"
    | "Education"
    | "Manufacturing"
    | "Other";
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
      const matchQ =
        !q ||
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
        activeFilter === j.type;

      return matchQ && matchLoc && matchInd && matchFilter;
    });
  }, [keyword, location, industry, activeFilter]);

  const activeJob = useMemo(
    () => JOBS.find((j) => j.id === openJobId) || null,
    [openJobId]
  );

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
      {/* ... (unchanged sections for categories, featured jobs, resources, CTA) ... */}

      {/* Job details modal */}
      {activeJob && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-dark-gray mb-2">
                    {activeJob.title}
                  </h2>
                  <p className="text-xl text-dark-gray mb-4">{activeJob.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-dark-gray mb-4">
                    <span>📍 {activeJob.location}</span>
                    <span>💰 {activeJob.salary}</span>
                    <span>⏰ {activeJob.type}</span>
                  </div>
                </div>
                <button
                  onClick={closeJob}
                  className="text-dark-gray hover:text-black"
                  aria-label="Close"
                >
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
        <QuickApplyModal job={appForJob} onClose={closeApply} />
      )}
    </main>
  );
}
