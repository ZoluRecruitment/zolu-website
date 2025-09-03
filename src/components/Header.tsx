import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./header.css";                      // <-- IMPORTANT: pulls in the styles

export default function Header() {
  return (
    <header className="zolu-header">
      <div className="zolu-header__inner">
        {/* Left: Logo + small "Recruitment" */}
        <a href="/" className="zolu-brand" aria-label="ZoLu Recruitment home">
          <img src={logo} alt="ZoLu" className="zolu-brand__logo" />
          <span className="zolu-brand__sub">Recruitment</span>
        </a>

        {/* Right: Uppercase nav */}
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

          {/* Bold this to mirror your screenshot emphasis */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "zolu-nav__link is-strong" + (isActive ? " is-active" : "")
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
