import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <img src="/logo.png" alt="ZoLu Recruitment" />
    </header>
  );
}

        {/* Right: Primary nav */}
        <nav className="zolu-nav" aria-label="Primary">
          <NavLink to="/" end className="zolu-nav__link">
            HOME
          </NavLink>
          <NavLink to="/services" className="zolu-nav__link">
            FIND STAFF
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `zolu-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            FIND WORK
          </NavLink>
          <NavLink to="/about" className="zolu-nav__link">
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
