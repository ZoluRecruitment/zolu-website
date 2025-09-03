import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="zolu-header">
      <div className="zolu-header__inner">
        {/* Left: Logo */}
        <a href="/" className="zolu-brand" aria-label="ZoLu Recruitment home">
          <img src="/Logo.png?v=2" alt="ZoLu" className="zolu-brand__logo" />
        </a>

        {/* Right: Uppercase nav (active page becomes bold via .is-active) */}
        <nav className="zolu-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            FIND STAFF
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            FIND WORK
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
