import "./navigation.css";
import { Link } from "react-router-dom";
import { links } from "./mobileNavigation.js";
function MobileNavigation() {
  return (
    <>
      <nav class="mobile-navigation-wrapper">
        <ul class="mobile-navigation-links">
          {links.map((link, index) => (
            <li class="mobile-links" key={link.id}>
              <Link
                class="mobile-nav-link"
                to={`${link.id === index + 1 ? link.path : "/"}`}
              >
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
