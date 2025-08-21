import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="site">
      <div className="container">
        <Header />
      </div>
      <nav className="nav">
        <div className="inner">
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
        </div>
      </nav>
      <main className="content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="inner">
          <div>© {new Date().getFullYear()} ZoLu Recruitment — Amber Recruitment Pty Ltd</div>
          <div className="address">Sydney NSW • hello@zolurecruitment.com</div>
        </div>
      </footer>
    </div>
  );
}
