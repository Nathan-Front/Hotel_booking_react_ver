import "./navigation.css";
import { Link } from "react-router-dom";
import { links } from "./mobileNavigation.js";
function MobileNavigation() {
  return (
    <>
      <nav className="mobile-navigation-wrapper">
        <ul className="mobile-navigation-links">
          {links.map((link) => (
            <li className="mobile-links" key={link.id}>
              <Link className="mobile-nav-link" to={link.path}>
                <img
                  src={`${import.meta.env.BASE_URL}${link.src}`}
                  alt={`${link.alt}-image`}
                  loading="eager"
                />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MobileNavigation;
