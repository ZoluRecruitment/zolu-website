export default function Header(){
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="ZoLu Recruitment — Home">
        <img className="logo" src="/logo.png" alt="ZoLu Recruitment" />
        <h1>ZoLu Recruitment</h1>
      </a>
      <a className="cta" href="/contact">Work with us</a>
    </header>
  );
}
