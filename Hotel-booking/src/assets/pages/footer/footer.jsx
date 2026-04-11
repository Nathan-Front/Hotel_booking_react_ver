import "./footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateEmail, subscribe } from "./footer.js";
function Footer() {
  const footerContact = [
    { name: "address", src: "images/logo/address-svgrepo-com.svg" },
    { name: "phone", src: "images/logo/contact-phone-talking-svgrepo-com.svg" },
    { name: "email", src: "images/logo/email-add-svgrepo-com.svg" },
  ];
  const footerLinks = [
    { name: "Home", path: "/", src: "images/logo/home-1-svgrepo-com.svg" },
    {
      name: "Rooms",
      path: "/",
      src: "images/logo/room-key-key-svgrepo-com.svg",
    },
    {
      name: "About",
      path: "/",
      src: "images/logo/about-faq-help-question-svgrepo-com.svg",
    },
    {
      name: "Contact",
      path: "/",
      src: "images/logo/contact-phone-communication-svgrepo-com.svg",
    },
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
  const [isSubscribe, setIsSubscribe] = useState({
    email: "",
    date: new Date().toISOString(),
  });
  const handleSubscribe = (e) => {
    const { name, value } = e.target;
    setIsSubscribe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubcribe = (e) => {
    e.preventDefault();
    const mail = validateEmail(isSubscribe.email);
    if (mail) {
      const result = subscribe(isSubscribe);
      if (result.success) {
        setIsSubscribe({ email: "", date: new Date().toISOString() });
        alert("Thank you for subscribing.");
      } else if (result.errorType === "Already_Exist") {
        alert("This email is already subscribed.");
        return;
      }
    } else {
      alert("Please input correct email format.");
      return;
    }
  };
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
            {footerLinks.map((quick) => (
              <li key={quick.name}>
                <Link to={quick.path}>
                  <img
                    className="footer-logo"
                    src={quick.src}
                    alt={`${quick.name}-logo`}
                    loading="lazy"
                  />
                  {quick.name}
                </Link>
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
          <form action="" onSubmit={handleSubcribe}>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
              value={isSubscribe.email}
              onChange={handleSubscribe}
            />

            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
