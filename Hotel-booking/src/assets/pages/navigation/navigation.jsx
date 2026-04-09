import "../../style/style.css";
import { Link } from "react-router-dom";

function Navigations() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];
  return (
    <>
      <nav className="navigation-wrapper">
        <div>
          <img
            className="hotel-logo"
            src="./images/logo/logo.png"
            alt="company logo"
            loading="eager"
          />
        </div>
        <ul className="navigation-links">
          {navLinks.map((toLinks) => (
            <li className="links" key={toLinks.name}>
              <Link className="nav-link" to={toLinks.path}>
                {toLinks.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navigations;
