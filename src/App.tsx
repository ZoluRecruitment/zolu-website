import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="site">
      {/* Universal banner (logo + nav) */}
      <Header />

      {/* Page content */}
      <main className="content">
        <ScrollToTop />
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="inner">
          <div>
            © {new Date().getFullYear()} ZoLu Recruitment — Amber Recruitment Pty Ltd
          </div>
          <div className="address">
            Sydney NSW •{" "}
            <a
              className="cta"
              data-label="footer_email"
              href="mailto:hello@zolurecruitment.com"
            >
              hello@zolurecruitment.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
