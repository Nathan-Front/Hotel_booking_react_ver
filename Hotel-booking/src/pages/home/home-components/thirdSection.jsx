import "./thirdSection.css";
import { Link } from "react-router-dom";
import { aboutContent } from "./data/thirdSection.js";
import React from "react";
import { useState, useEffect, useRef } from "react";
function ThirdSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
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
      { threshold: 0.3, rootMargin: "0px" },
    );
    const current = containerRef.current;
    const current2 = imageRef.current;
    if (current && current2) {
      observer.observe(current);
      observer.observe(current2);
    }
    return () => {
      if (current && current2) {
        observer.unobserve(current);
        observer.unobserve(current2);
      }
    };
  }, []);
  return (
    <>
      <section className="third-section">
        {aboutContent.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={
                show ? "index-about-us slideContainer" : "index-about-us"
              }
              ref={containerRef}
            >
              <h2 className="section-titles">{item.title}</h2>
              <p>{item.text}</p>
              <Link className="to-about-us-button" to={"/about"}>
                {item.btn}
              </Link>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}${item.src}`}
              alt={item.alt + "-image"}
              loading="lazy"
              className={show ? "slideImage" : ""}
              ref={imageRef}
            />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default ThirdSection;
