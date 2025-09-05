import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="site">
      {/* Top header (no container wrapper) */}
      <Header />

      {/* Service area strip (shows under the header) */}
      <div className="strip">
        <div className="inner">
          <span>Sydney • Serving Greater Sydney & NSW</span>
          <a className="cta" data-label="strip_start_a_brief" href="/contact">
            Start a brief
          </a>
        </div>
      </div>

      {/* Sticky nav */}
      <nav className="nav">
        <div className="inner">
          <NavLink to="/" end data-track="nav_click" data-label="home_nav" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" data-track="nav_click" data-label="about_nav" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/services" data-track="nav_click" data-label="services_nav" className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>

          {/* NEW: Find Staff */}
          <NavLink to="/find-staff" data-track="nav_click" data-label="find_staff_nav" className={({ isActive }) => (isActive ? "active" : "")}>
            Find Staff
          </NavLink>

          <NavLink to="/contact" data-track="nav_click" data-label="contact_nav" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>
      </nav>

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
              href="mailto:admin@zolurecruitment.com"
            >
              admin@zolurecruitment.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
