export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Morten P. Ollestad
      </a>
      <ul>
        <li>
          <a href="/about">About me</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
}
