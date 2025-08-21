import { useEffect } from "react";

export default function About(){
  useEffect(() => { document.title = "About — ZoLu Recruitment"; }, []);

  return (
    <section className="section">
      <div className="card">
        <h2>About Us</h2>
        <p><strong>ZoLu Recruitment</strong> (Amber Recruitment Pty Ltd) is Sydney-based and services Greater Sydney and NSW as required.</p>
        <p>We combine speed and clear scope with dependable replacement guarantees. Our model supports both small local businesses and professional/managerial roles.</p>
        <ul>
          <li><strong>Starter / Standard / Pro</strong> — budget-friendly, fixed-scope packages for essential roles.</li>
          <li><strong>Comprehensive campaigns</strong> — structured delivery for upper-tier roles aligned to our framework.</li>
          <li>Shortlists typically within 3 business days for most roles.</li>
        </ul>
      </div>
    </section>
  );
}
      {/* Why ZoLu */}
      <section className="section">
        <div className="kicker">Why ZoLu</div>
        <div className="row" style={{marginTop:12}}>
          <div className="card col">
            <h3>Fast & dependable</h3>
            <ul>
              <li>Shortlists typically within 3 business days</li>
              <li>Daily comms while we’re searching</li>
              <li>Replacement guarantees appropriate to the tier</li>
            </ul>
          </div>
          <div className="card col">
            <h3>Right-sized scope</h3>
            <ul>
              <li><strong>Starter / Standard / Pro</strong> for small businesses</li>
              <li>Structured campaigns for upper-tier roles</li>
              <li>Pricing aligned to our framework; fees confirmed in ToB</li>
            </ul>
          </div>
        </div>
      </section>
