// src/components/QuickApplyModal.tsx
import { useState } from "react";

export type Job = {
  id: string;
  title: string;
};

export default function QuickApplyModal({
  job,
  onClose,
}: {
  job: Job | null;
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("job_title", job?.title || "General application");
    data.append("job_id", job?.id || "quick-apply");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: data, // let browser set multipart boundary
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || `Submit failed (${res.status})`);
      }

      setSuccess(true);
      form.reset();
      (window as any)?.gtag?.("event", "lead", {
        event_category: "form",
        event_label: job?.id || "quick-apply",
      });
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

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

          <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-dark-gray font-medium mb-2">First Name *</label>
                <input name="first_name" required className="w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
              </div>
              <div>
                <label className="block text-dark-gray font-medium mb-2">Last Name *</label>
                <input name="last_name" required className="w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
              </div>
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Email Address *</label>
              <input type="email" name="email" required className="w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Phone Number *</label>
              <input type="tel" name="phone" required className="w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" />
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Resume *</label>
              <div className="border-2 border-dashed border-light-gray rounded-lg p-8 text-center">
                <input id="resumeUpload" type="file" name="resume" accept=".pdf,.doc,.docx" required className="hidden" />
                <label htmlFor="resumeUpload" className="cursor-pointer">
                  <div className="text-4xl mb-4">📄</div>
                  <p className="text-dark-gray mb-2">Click to upload your resume</p>
                  <p className="text-sm text-light-gray">PDF, DOC, or DOCX (Max 5MB)</p>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-dark-gray font-medium mb-2">Cover Letter</label>
              <textarea rows={4} name="cover_letter" className="w-full p-4 border border-light-gray rounded-lg focus:outline-none focus:border-dark-gray" placeholder="Tell us why you're interested..." />
            </div>

            {error && <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>}
            {success && <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">Thanks! Your application was submitted.</p>}

            <div className="flex gap-4">
              <button type="submit" disabled={submitting} className="btn-primary text-white px-8 py-3 rounded-lg font-semibold flex-1">
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
              <button type="button" onClick={onClose} className="border-2 border-dark-gray text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-dark-gray hover:text-white transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
