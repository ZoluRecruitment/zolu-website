import { NavLink } from "react-router-dom";
import logo from "../assets/zolu-logo.svg"; // <-- change to .png if that's your file

export default function Header() {
  return (
    <header className="zolu-header">
      <div className="zolu-header__inner">
        {/* Brand */}
        <a href="/" className="zolu-brand" aria-label="ZoLu Recruitment home">
          <img src={logo} alt="ZoLu" className="zolu-brand__logo" />
          <span className="zolu-brand__sub">Recruitment</span>
        </a>

        {/* Primary nav */}
        <nav className="zolu-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            Find Staff
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            Find Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
