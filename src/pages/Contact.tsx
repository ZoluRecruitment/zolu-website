import { useEffect, useState } from "react";

export default function Contact(){
  useEffect(() => { document.title = "Contact — ZoLu Recruitment"; }, []);
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (hidden) to deter bots
    if (data.get("company_website")) return;

    try {
      const res = await fetch("https://formspree.io/f/myzpqvjo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section className="section">
        <div className="card">
          <h2>Thanks — we’ve got it</h2>
          <p>We’ll reply shortly. If it’s urgent, email <a href="mailto:hello@zolurecruitment.com">hello@zolurecruitment.com</a>.</p>
          <p><a className="cta" href="/">Back to Home</a></p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="card">
        <h2>Contact Us</h2>
        <p>Tell us about your role and timeline. We’ll respond quickly with the next steps.</p>

        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="company">Company</label>
          <input id="company" name="company" />

          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" rows={5} required />

          {/* Honeypot (hidden) */}
          <input type="text" name="company_website" style={{display:"none"}} tabIndex={-1} autoComplete="off" />

          <div style={{marginTop:12, display:'flex', gap:8, alignItems:'center'}}>
            <button type="submit" disabled={status==="sending"}>
              {status==="sending" ? "Sending…" : "Send"}
            </button>
            <a className="cta" href="mailto:hello@zolurecruitment.com">Or email us directly</a>
          </div>

          {status==="error" && (
            <p style={{color:"#b00020", marginTop:10}}>
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
