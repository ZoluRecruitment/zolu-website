import { useEffect } from "react";

export default function Services(){
  useEffect(() => { document.title = "Services — ZoLu Recruitment"; }, []);

  return (
    <section className="section">
      <div className="card">
        <h2>Services</h2>
        <p>Choose the track that fits your needs and role complexity.</p>

        <h3 style={{marginTop:16}}>A) Small-Business Fixed-Price Packages</h3>
        <p>Affordable, fixed-scope options. Fees are confirmed in proposals/ToB.</p>
        <div className="row">
          <div className="card col">
            <h4>Starter</h4>
            <ul>
              <li>1–2 candidates</li>
              <li>Identity & work-rights check</li>
              <li>1 reference</li>
              <li>7-day replacement guarantee</li>
            </ul>
          </div>
          <div className="card col">
            <h4>Standard</h4>
            <ul>
              <li>3 candidates</li>
              <li>Phone screening + shortlisting</li>
              <li>1–2 references</li>
              <li>14-day replacement guarantee</li>
            </ul>
          </div>
          <div className="card col">
            <h4>Pro</h4>
            <ul>
              <li>3–5 candidates</li>
              <li>Deeper screening + interview support</li>
              <li>2 references</li>
              <li>30-day replacement guarantee</li>
            </ul>
          </div>
        </div>

        <h3 style={{marginTop:24}}>B) Professional & Managerial Recruitment</h3>
        <p>Structured pricing aligned to our framework for supervisors, managers and specialist roles. Scope typically includes targeted sourcing, behavioural screening, references, interview coordination and offer support. Replacement guarantees apply as appropriate.</p>

        <p style={{marginTop:16}}>
          <a className="cta" href="/contact">Start a brief</a>
        </p>
      </div>
    </section>
  );
}
