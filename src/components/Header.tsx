import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a href="/" className="brand" aria-label="ZoLu Recruitment home">
          <span className="brand__name">ZoLu Recruitment</span>
        </a>

        <nav className="tabs" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>
            HOME
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>
            ABOUT
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>
            FIND STAFF
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>
            FIND WORK
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
