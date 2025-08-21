import { useEffect } from "react";

export default function Contact(){
  useEffect(() => { document.title = "Contact — ZoLu Recruitment"; }, []);

  return (
    <section className="section">
      <div className="card">
        <h2>Contact Us</h2>
        <p>Tell us about your role and timeline. We’ll respond quickly with the next steps.</p>
        <form action="mailto:hello@zolurecruitment.com" method="post" encType="text/plain">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="company">Company</label>
          <input id="company" name="company" />
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" rows={5} required />
          <div style={{marginTop:12, display:'flex', gap:8, alignItems:'center'}}>
            <button type="submit">Send</button>
            <a className="cta" href="mailto:hello@zolurecruitment.com">Or email us directly</a>
          </div>
        </form>
      </div>
    </section>
  );
}
