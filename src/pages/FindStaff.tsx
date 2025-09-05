import { useRef, useState } from "react";
import "./find-staff.css";

/**
 * Find Staff page
 * - Uses ZoLu brand colours
 * - Smooth scroll to form
 * - Form posts to your existing Formspree endpoint (/f/myzpqvjo)
 * - Fires GA "lead" on successful submit (same as your Contact form)
 * - Adds data-track labels for your global click listener
 */
export default function FindStaff() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scrollToForm = () => {
    document.getElementById("jobForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      // Send to your existing Formspree endpoint
      const res = await fetch("https://formspree.io/f/myzpqvjo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        // Fire your GA lead event (you already wire this in Contact)
        // @ts-ignore
        window.dataLayer?.push({ event: "lead", label: "find_staff_form_success" });

        setSuccess("Thanks! We’ve received your job brief. We’ll be in touch within 24 hours.");
        form.reset();
      } else {
        setError("Something went wrong sending your brief. Please try again or email admin@zolurecruitment.com.");
      }
    } catch {
      setError("Network error. Please try again or email admin@zolurecruitment.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-dark-gray leading-tight mb-4 md:mb-6">
              Find the perfect <span className="text-black">staff</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Connect with exceptional talent that will drive your business forward. We help you find the right people for the right roles.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-lg cta"
              data-track="find_staff_post_job"
            >
              Post a job now
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-3 md:mb-4">Our recruitment services</h2>
            <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto">
              Choose the service that best fits your hiring needs and timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Executive Search */}
            <div className="card-hover bg-cream p-6 md:p-8 rounded-2xl text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark-gray mb-3 md:mb-4">Executive Search</h3>
              <p className="text-dark-gray mb-4 md:mb-6">
                Senior leadership and C-suite roles with a confidential, comprehensive search.
              </p>
              <ul className="text-sm text-dark-gray space-y-2 mb-5 md:mb-6 text-left inline-block">
                <li>• Confidential search process</li>
                <li>• Executive assessment</li>
                <li>• 90-day guarantee</li>
              </ul>
              <button className="w-full bg-dark-gray text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors">
                Learn more
              </button>
            </div>

            {/* Permanent Placement */}
            <div className="card-hover bg-light-cream p-6 md:p-8 rounded-2xl text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L20.29 9.12L22 10.83V6H16Z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark-gray mb-3 md:mb-4">Permanent Placement</h3>
              <p className="text-dark-gray mb-4 md:mb-6">
                Full-time roles across industries and levels. Our most popular service.
              </p>
              <ul className="text-sm text-dark-gray space-y-2 mb-5 md:mb-6 text-left inline-block">
                <li>• Comprehensive screening</li>
                <li>• Skills assessment</li>
                <li>• 60-day guarantee</li>
              </ul>
              <button className="w-full bg-dark-gray text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors">
                Get started
              </button>
            </div>

            {/* Contract Staffing */}
            <div className="card-hover bg-cream p-6 md:p-8 rounded-2xl text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark-gray mb-3 md:mb-4">Contract Staffing</h3>
              <p className="text-dark-gray mb-4 md:mb-6">
                Temporary & project-based roles with fast turnaround and flexible terms.
              </p>
              <ul className="text-sm text-dark-gray space-y-2 mb-5 md:mb-6 text-left inline-block">
                <li>• Quick turnaround</li>
                <li>• Flexible terms</li>
                <li>• Ongoing support</li>
              </ul>
              <button className="w-full bg-dark-gray text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors">
                Explore options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-light-cream">
        <div className="container">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-3 md:mb-4">Industries we serve</h2>
            <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto">
              We understand your context — and match candidates accordingly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              ["💻", "Technology"],
              ["🏥", "Healthcare"],
              ["💰", "Finance"],
              ["🏭", "Manufacturing"],
              ["🎓", "Education"],
              ["🛍️", "Retail"],
            ].map(([icon, label]) => (
              <div key={label} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-sm font-medium text-dark-gray">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job form */}
      <section id="jobForm" className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-3 md:mb-4">Post your job</h2>
            <p className="text-lg md:text-xl text-dark-gray">
              Tell us about your hiring needs and we’ll connect you with the right candidates.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-light-cream p-6 md:p-8 rounded-2xl">
            {/* Hidden meta fields for Formspree/email context */}
            <input type="hidden" name="_subject" value="New Job Brief — Find Staff page" />
            <input type="hidden" name="source_page" value="find-staff" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-dark-gray font-medium mb-2">Company Name *</label>
                <input name="company" type="text" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-dark-gray font-medium mb-2">Contact Email *</label>
                <input name="email" type="email" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="your@email.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-dark-gray font-medium mb-2">Job Title *</label>
                <input name="job_title" type="text" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="e.g. Café Manager" />
              </div>
              <div>
                <label className="block text-dark-gray font-medium mb-2">Industry *</label>
                <select name="industry" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray">
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-dark-gray font-medium mb-2">Employment Type *</label>
                <select name="employment_type" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray">
                  <option value="">Select Type</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>
              <div>
                <label className="block text-dark-gray font-medium mb-2">Experience Level *</label>
                <select name="experience_level" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray">
                  <option value="">Select Level</option>
                  <option value="entry">Entry (0–2 years)</option>
                  <option value="mid">Mid (3–5 years)</option>
                  <option value="senior">Senior (6–10 years)</option>
                  <option value="executive">Executive (10+ years)</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-dark-gray font-medium mb-2">Location *</label>
              <input name="location" type="text" required className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="e.g. Penrith NSW or Remote" />
            </div>

            <div className="mb-6">
              <label className="block text-dark-gray font-medium mb-2">Salary Range</label>
              <input name="salary" type="text" className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="e.g. $28–$35/hr or $70k–$85k + super" />
            </div>

            <div className="mb-6">
              <label className="block text-dark-gray font-medium mb-2">Job Description *</label>
              <textarea name="job_description" required rows={6} className="form-input w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="Role, responsibilities, must-haves…"></textarea>
            </div>

            <div className="mb-8">
              <label className="block text-dark-gray font-medium mb-2">Urgency Level</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input type="radio" name="urgency" value="standard" className="mr-2" defaultChecked />
                  <span className="text-dark-gray">Standard (2–4 weeks)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="urgency" value="urgent" className="mr-2" />
                  <span className="text-dark-gray">Urgent (1–2 weeks)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="urgency" value="immediate" className="mr-2" />
                  <span className="text-dark-gray">Immediate (ASAP)</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full text-white py-4 rounded-lg font-semibold text-lg cta"
              data-track="find_staff_submit_job"
            >
              {submitting ? "Submitting…" : "Submit Job Posting"}
            </button>

            {success && <div className="success-box mt-6">{success}</div>}
            {error && <div className="error-box mt-6">{error}</div>}
          </form>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-3 md:mb-4">Our recruitment process</h2>
            <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto">
              A proven methodology to consistently land the right hire.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              ["1", "Consultation", "We understand your needs, culture and requirements."],
              ["2", "Sourcing", "Active search across our network and channels."],
              ["3", "Screening", "Interviews and checks to ensure quality matches."],
              ["4", "Placement", "Shortlist, offer support and onboarding."],
            ].map(([num, title, copy], i) => (
              <div key={num} className={`step-indicator text-center ${i < 3 ? "completed" : ""}`}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white font-bold text-lg md:text-xl">{num}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-dark-gray mb-1 md:mb-2">{title}</h3>
                <p className="text-dark-gray">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gray py-16 md:py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to find your next star employee?
          </h2>
          <p className="text-lg md:text-xl text-light-gray mb-6 md:mb-8">
            We’ll help you build a strong, reliable team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-white text-dark-gray px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-all duration-300 cta"
              data-track="find_staff_cta_post_job"
            >
              Post a job
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-gray transition-all duration-300 cta"
              data-track="find_staff_cta_schedule_consult"
            >
              Schedule consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
