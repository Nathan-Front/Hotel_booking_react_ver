import "./secondSection.css";
import { secondSectionImg } from "./data/secondSection";
import { useState, useEffect, useRef } from "react";
function SecondSection() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.2, rootMargin: "0px" },
    );
    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);
  return (
    <>
      <section
        className={show ? "second-section roomLists" : "second-section"}
        ref={sectionRef}
      >
        <h2 className="section-titles">Our Rooms</h2>
        <p>Here are the room options available at our hotel:</p>
        <ul className="index-room-wrapper">
          {secondSectionImg.map((image) => (
            <li className="index-room-panels" key={image.name}>
              <div className="index-room-images">
                <img
                  src={`${import.meta.env.BASE_URL}${image.src}`}
                  alt={`${image.name}-image`}
                  loading="lazy"
                />
              </div>
              <h3>{image.name}</h3>
              <p>{image.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SecondSection;
