import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="site">
      {/* Top header with logo & CTA */}
      <div className="container">
        <Header />
      </div>

      {/* Service area strip (shows under the header) */}
      <div className="strip">
        <div className="inner">
          <span>Sydney • Serving Greater Sydney & NSW</span>
          <a className="cta" href="/contact">Start a brief</a>
        </div>
      </div>

      {/* Sticky nav */}
      <nav className="nav">
        <div className="inner">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </div>
      </nav>

      {/* Page content */}
      <main className="content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="inner">
          <div>© {new Date().getFullYear()} ZoLu Recruitment — Amber Recruitment Pty Ltd</div>
          <div className="address">Sydney NSW • hello@zolurecruitment.com</div>
        </div>
      </footer>

    </div>  {/* wrapper closes LAST */}
  );
}
