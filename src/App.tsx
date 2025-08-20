// src/App.tsx
import "./App.css";

export default function App() {
  return (
    <main className="container">
      <header className="header">
        <img className="logo" src="/logo.png" alt="ZoLu Recruitment" />
        <h1>ZoLu Recruitment</h1>
      </header>

      <section className="card hero">
        <h2>Fast, affordable hiring for hospitality & retail</h2>
        <p>
          We help Western Sydney businesses hire reliable baristas, kitchenhands,
          retail assistants and entry-level reception quickly and without the fuss.
        </p>
        <a
          className="btn"
          href="mailto:hello@zolurecruitment.com?subject=Hire%20with%20ZoLu"
        >
          Get in touch
        </a>
      </section>

      <section className="row">
        <article className="card plan">
          <h3>Basic — $600</h3>
          <ul>
            <li>1–2 candidates</li>
            <li>Basic screening</li>
            <li>7-day replacement guarantee</li>
          </ul>
        </article>

        <article className="card plan">
          <h3>Standard — $750</h3>
          <ul>
            <li>3 candidates</li>
            <li>Phone screening + shortlisting</li>
            <li>14-day replacement guarantee</li>
          </ul>
        </article>

        <article className="card plan">
          <h3>Pro — $1,000</h3>
          <ul>
            <li>3–5 candidates</li>
            <li>Screening + interview support</li>
            <li>30-day replacement guarantee</li>
          </ul>
        </article>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} ZoLu Recruitment • Western Sydney
      </footer>
    </main>
  );
}
