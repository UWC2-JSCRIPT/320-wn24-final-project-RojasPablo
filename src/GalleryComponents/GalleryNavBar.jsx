import { Link } from "react-router-dom";

export default function GalleryNavBar() {
  return (
    <>
      <header>
        <h1>· GALLERY ·</h1>
        <nav className="routes">
          <ul>
            <li>
              <Link to="/home" className="nav-link">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/adopt" className="nav-link">
                ADOPT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
