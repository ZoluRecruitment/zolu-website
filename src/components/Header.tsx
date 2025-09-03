import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        {/* Left: logo + name */}
        <a href="/" className="brand" aria-label="ZoLu Recruitment home">
          <img src="/Logo.png?v=3" alt="ZoLu" className="brand__logo" />
          <span className="brand__name">ZoLu Recruitment</span>
        </a>

        {/* Right: tabs */}
        <nav className="tabs" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}
          >
            FIND STAFF
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}
          >
            FIND WORK
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
