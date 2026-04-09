import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const footerContact = [
    { name: "address", src: "images/logo/address-svgrepo-com.svg" },
    { name: "phone", src: "images/logo/contact-phone-talking-svgrepo-com.svg" },
    { name: "email", src: "images/logo/email-add-svgrepo-com.svg" },
  ];
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];
  const footerMedia = [
    { name: "Facebook", src: "images/logo/facebook-svgrepo-com.png" },
    {
      name: "X/Twitter",
      src: "images/logo/twitter-rounded-border-svgrepo-com.png",
    },
    {
      name: "Instagram",
      src: "images/logo/instagram-rounded-border-svgrepo-com.png",
    },
    { name: "LinkedIn", src: "images/logo/linkedin-boerder-svgrepo-com.png" },
  ];
  return (
    <>
      <footer>
        <div className="footer-panels">
          <h3>Contact us</h3>
          <ul>
            {footerContact.map((con) => (
              <li key={con.name}>
                <div>
                  <img
                    className="footer-logo"
                    src={`${import.meta.env.BASE_URL}${con.src}`}
                    alt={`${con.name}-logo`}
                    loading="lazy"
                  />
                  <p>{con.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-panels">
          <h3>Quick Links</h3>
          <ul>
            {footerLinks.map((l) => (
              <li key={l.name}>
                <Link to={l.path}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-panels">
          <h3>Follow Us</h3>
          <ul>
            {footerMedia.map((med) => (
              <li key={med.name}>
                <a href="https://www.facebook.com">
                  <img
                    className="footer-logo"
                    src={med.src}
                    alt={`${med.name}-logo`}
                    loading="lazy"
                  />
                  {med.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-panels">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input
            name="IfootEmail"
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button type="button" className="subscribe-button">
            Subscribe
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
