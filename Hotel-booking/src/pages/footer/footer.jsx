import "./footer.css";
import AlrightReserve from "./alrightReserve.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateEmail } from "../../assets/script/validateEmail.js";
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
      path: "/rooms",
      src: "images/logo/room-key-key-svgrepo-com.svg",
    },
    {
      name: "About",
      path: "/about",
      src: "images/logo/about-faq-help-question-svgrepo-com.svg",
    },
    {
      name: "Contact",
      path: "/contact",
      src: "images/logo/contact-phone-communication-svgrepo-com.svg",
    },
  ];
  const footerMedia = [
    { name: "Facebook", src: "images/logo/facebook-svgrepo-com.webp" },
    {
      name: "X/Twitter",
      src: "images/logo/twitter-rounded-border-svgrepo-com.webp",
    },
    {
      name: "Instagram",
      src: "images/logo/instagram-rounded-border-svgrepo-com.webp",
    },
    { name: "LinkedIn", src: "images/logo/linkedin-boerder-svgrepo-com.webp" },
  ];
  const initialForm = {
    email: "",
    _honey: "",
  };
  const [isSubscribe, setIsSubscribe] = useState(initialForm);
  const handleSubscribe = (e) => {
    const { name, value } = e.target;
    setIsSubscribe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const subscribeEmail = async (e) => {
    e.preventDefault();
    if (isSubscribe._honey) {
      console.log("Bot detected");
      return;
    }
    const mail = validateEmail(isSubscribe.email);
    if (!mail) {
      setIsError(true);
      return;
    }
    setIsSending(true);
    const data = { email: isSubscribe.email };
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyZvOwTmDnGsQElZ-J4KNfPTtQW7CKgq7kqWGMd-6kzj9L7xwc2MGpVBhJLHBsoXkHu6Q/exec";
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.text();
      if (result === "Duplicate") {
        alert("Email already subscribed.");
        setIsSubscribe(initialForm);
        setIsSending(false);
      } else {
        alert("Thank you for subscribing.");
        setIsSubscribe(initialForm);
        setIsSending(false);
      }
    } catch (e) {
      alert("An error occured. Try again later.");
    } finally {
      setIsSending(false);
      setIsError(false);
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
          <form action="" onSubmit={subscribeEmail}>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`${isError ? "subscribe-input input-error" : "subscribe-input"}`}
                value={isSubscribe.email}
                onChange={handleSubscribe}
              />
              <input
                type="text"
                name="_honey"
                value={isSubscribe._honey}
                onChange={handleSubscribe}
                style={{
                  position: "absolute",
                  left: "-999999px",
                }}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="subscribe-button"
              disabled={isSending}
            >
              <span
                id="loader"
                className={`${isSending ? "spinner" : ""}`}
              ></span>
              <span id="btn-text">
                {" "}
                {isSending ? "Sending..." : "Subscribe"}
              </span>
            </button>
          </form>
        </div>
      </footer>
      <AlrightReserve />
    </>
  );
}

export default Footer;
