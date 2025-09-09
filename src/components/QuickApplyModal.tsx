// QuickApplyModal.tsx (or inside your Find Work page)
import { useState } from "react";

export default function QuickApplyModal({ onClose }: { onClose: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();                          // stop native nav
    setSubmitting(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);           // <-- includes file
      // IMPORTANT: do NOT set Content-Type manually; the browser does it.
      const res = await fetch("https://formspree.io/f/myzpqvjo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        // If attachments aren’t allowed on your Formspree plan, you’ll see a 400 here.
        throw new Error(j?.errors?.[0]?.message || `Submit failed (${res.status})`);
      }
      setSuccess(true);
      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6">
        <button onClick={onClose} className="absolute right-4 top-4" aria-label="Close">✕</button>
        <h2 className="mb-6 text-3xl font-bold text-dark-gray">Quick Apply</h2>

        {success ? (
          <div className="rounded-lg bg-cream p-4 text-dark-gray">
            ✅ Thanks! Your application was submitted.
          </div>
        ) : (
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-medium">First Name *</span>
                <input name="firstName" required className="rounded-lg border p-3" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-medium">Last Name *</span>
                <input name="lastName" required className="rounded-lg border p-3" />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-medium">Email Address *</span>
                <input type="email" name="email" required className="rounded-lg border p-3" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-medium">Phone Number *</span>
                <input name="phone" required className="rounded-lg border p-3" />
              </label>
            </div>

            <div className="mt-4">
              <label className="flex flex-col gap-2">
                <span className="font-medium">Resume *</span>
                <input
                  type="file"
                  name="resume"                    // <-- must have a name
                  accept=".pdf,.doc,.docx"
                  required
                  className="rounded-lg border p-3"
                />
                <small className="text-sm text-dark-gray/70">PDF, DOC, or DOCX (Max 5MB)</small>
              </label>
            </div>

            <div className="mt-4">
              <label className="flex flex-col gap-2">
                <span className="font-medium">Cover Letter</span>
                <textarea name="coverLetter" rows={5} className="rounded-lg border p-3" />
              </label>
            </div>

            {/* Formspree spam honeypot (optional) */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Redirect or subject (optional) */}
            <input type="hidden" name="_subject" value="ZoLu Quick Apply" />
            {/* <input type="hidden" name="_next" value="https://zolurecruitment.com/thanks" /> */}

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-red-700">
                {error}
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-black px-6 py-3 font-semibold text-white disabled:opacity-50"
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
              <button type="button" onClick={onClose} className="rounded-lg border px-6 py-3">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
