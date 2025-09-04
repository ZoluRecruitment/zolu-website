import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="topbar">
      {/* tighter left padding so the name sits further left */}
      <div className="topbar__inner" style={{ paddingLeft: 8, paddingRight: 16 }}>
        <a href="/" className="brand" aria-label="ZoLu Recruitment home">
          {/* 50% bigger (18px → 27px) and bold */}
          <span className="brand__name" style={{ fontSize: 27, fontWeight: 700 }}>ZoLu Recruitment</span>
        </a>

        <nav className="tabs" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>HOME</NavLink>
          <NavLink to="/about" className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>ABOUT</NavLink>
          <NavLink to="/services" className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>FIND STAFF</NavLink>
          <NavLink to="/contact" className={({ isActive }) => "tab" + (isActive ? " is-active" : "")}>FIND WORK</NavLink>
        </nav>
      </div>
    </header>
  );
}
