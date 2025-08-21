import { useEffect } from "react";

export default function Privacy(){
  useEffect(() => { document.title = "Privacy — ZoLu Recruitment"; }, []);
  return (
    <section className="section">
      <div className="card">
        <h2>Privacy Policy</h2>
        <p>We collect and use candidate/client information solely for recruitment purposes and store it securely. By contacting us or submitting details, you consent to our processing for hiring activity.</p>
        <ul>
          <li>Data we may collect: contact details, résumé, work rights, references.</li>
          <li>Storage & security: access-limited cloud services; retention only as required.</li>
          <li>Access/erasure: email <a href="mailto:hello@zolurecruitment.com">hello@zolurecruitment.com</a>.</li>
        </ul>
        <p>This page is a summary; your agreement with us is governed by our Terms of Business.</p>
      </div>
    </section>
  );
}
