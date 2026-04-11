import "./fifthSection.css";
import { useState } from "react";
import { submitMessage } from "../../../script";
function FifthSection() {
  const [inputMessage, setInputMessage] = useState({
    customer: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const success = submitMessage(inputMessage);
    if (success.success) {
      alert("Message received, thank you for your message.");
      setInputMessage({
        customer: "",
        email: "",
        contact: "",
        message: "",
      });
    } else {
      alert("Ooops! Something went wrong.");
    }
  };

  return (
    <>
      <section className="fifth-section">
        <h2 className="section-titles">Contact Us</h2>
        <div className="form-map-wrapper">
          <form action="" id="message-form" onSubmit={submitForm}>
            <input
              type="text"
              name="customer"
              placeholder="Your Name"
              required
              value={inputMessage.customer}
              onChange={handleInput}
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              required
              value={inputMessage.email}
              onChange={handleInput}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number (Optional)"
              value={inputMessage.contact}
              onChange={handleInput}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Your Message"
              required
              value={inputMessage.message}
              onChange={handleInput}
            ></textarea>
            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
          <iframe
            src="https://www.google.com/maps?q=Tokyo,Japan&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default FifthSection;
