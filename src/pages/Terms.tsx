import { useEffect } from "react";

export default function Terms(){
  useEffect(() => { document.title = "Terms — ZoLu Recruitment"; }, []);
  return (
    <section className="section">
      <div className="card">
        <h2>Terms</h2>
        <p>Engagements are delivered under our current Terms of Business (ToB). Scope, fees, payment timing, and replacement guarantees are confirmed in the proposal/ToB for each role.</p>
        <ul>
          <li>Starter/Standard/Pro: fixed-scope packages for essential roles.</li>
          <li>Professional & managerial: structured delivery aligned to our pricing framework.</li>
          <li>Guarantees: one replacement within the stated window where applicable.</li>
        </ul>
        <p>For a copy of the ToB, contact <a href="mailto:hello@zolurecruitment.com">hello@zolurecruitment.com</a>.</p>
      </div>
    </section>
  );
}
