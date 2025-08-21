import { useEffect } from "react";
import Hero from "../components/Hero";

export default function Home() {
  // Set the browser tab title for the Home page
  useEffect(() => {
    document.title = "ZoLu Recruitment — Sydney";
  }, []);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="kicker">Segments we serve</div>

        <div className="row" style={{ marginTop: 12 }}>
          <div className="card col">
            <h3>Essential / Budget-friendly</h3>
            <p>
              Hospitality, quick-service, retail, gyms, salons, medical reception, warehouse assistants.
            </p>
            <p>
              Clear fixed-scope packages (<strong>Starter</strong>, <strong>Standard</strong>, <strong>Pro</strong>)
              with short replacement guarantees.
            </p>
            <p><a className="cta" href="/services">See Services</a></p>
          </div>

          <div className="card col">
            <h3>Comprehensive / Upper-tier</h3>
            <p>
              Supervisors, venue/shift managers, assistant managers, store managers, office/admin
              coordinators, customer support, schedulers, junior ops/marketing, and similar roles.
            </p>
            <p>
              Structured pricing aligned to our framework and tailored to role complexity and urgency.
            </p>
            <p><a className="cta" href="/contact">Start a brief</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
