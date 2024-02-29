import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header>
        <h1>PetFinder</h1>
        <nav className="routes">
          <ul>
            <li>
              <Link to="/adopt" className="nav-link">
                ADOPT
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
