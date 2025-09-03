import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="zolu-header">
      <div className="zolu-header__inner">
        {/* Left: Logo */}
        <a href="/" className="zolu-brand" aria-label="ZoLu Recruitment home">
          {/* Note the capital L in /Logo.png and cache-buster */}
          <img src="/Logo.png?v=2" alt="ZoLu" className="zolu-brand__logo" />
          {/* Remove extra text below the logo to avoid duplicate “Recruitment” */}
          {/* <span className="zolu-brand__sub">Recruitment</span> */}
        </a>

        {/* Right: Uppercase nav */}
        <nav className="zolu-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? "" : "")
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? "" : "")
            }
          >
            FIND STAFF
          </NavLink>

          {/* Bold permanently to match your mock */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "zolu-nav__link is-strong" + (isActive ? "" : "")
            }
          >
            FIND WORK
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? "" : "")
            }
          >
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
