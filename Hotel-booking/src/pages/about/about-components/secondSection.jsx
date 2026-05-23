import "./secondSection.css";
import { leaders } from "./data/secondSection.js";
import { useState, useEffect, useRef } from "react";
function SecondSection() {
  const sectionRef = useRef(null);
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlip(true);
        } else {
          setFlip(false);
        }
      },
      { threshold: 0.3, rootMargin: "0px" },
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
      <section className="leaders-section">
        <h1>Our Leadership Team</h1>
        <p>
          Meet the dedicated individuals who lead our hotel and ensure
          exceptional service for all guests.
        </p>
        <ul className="leaders-wrapper">
          {leaders.map((item) => (
            <li
              className={flip ? "flip-cards flipLeaders" : "flip-cards"}
              ref={sectionRef}
              key={item.id}
            >
              <div className="flipping-card">
                <div className="card-front">
                  <div className="leaders">
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </div>
                  <img
                    src={`${import.meta.env.BASE_URL}${item.src}`}
                    alt={`${item.position}-image`}
                  />
                </div>
                <div className="card-back">
                  <p>{item.description}</p>
                  <div className="card-back-image-wrap">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.src}`}
                      alt={`${item.position}-image`}
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SecondSection;
