import { Link } from "react-router-dom";

export default function AdoptNavBar() {
  return (
    <>
      <header>
        <h1>· ADOPT ·</h1>
        <nav className="routes">
          <ul>
            <li>
              <Link to="/home" className="nav-link">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="nav-link">
                GALLERY
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
