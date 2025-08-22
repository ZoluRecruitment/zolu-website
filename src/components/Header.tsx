export default function Header(){
  return (
    <header className="header">
      {/* Logo → tracks as event "nav_click" with label "logo_home" */}
      <a
        className="brand"
        href="/"
        aria-label="ZoLu Recruitment — Home"
        data-track="nav_click"
        data-label="logo_home"
      >
        <img className="logo" src="/logo.png" alt="ZoLu Recruitment" />
        <h1>ZoLu Recruitment</h1>
      </a>

      {/* CTA → tracks as event "cta_click" with label "header_work_with_us" */}
      <a
        className="cta"
        data-label="header_work_with_us"
        href="/contact"
      >
        Work with us
      </a>
    </header>
  );
}
