import "./firstSection.css";
import { firstSectionImg, firstSectionText } from "./data/firstSection.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
function FirstSection() {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % firstSectionImg.length); //use the length of image itself
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="first-section">
        <ul className="first-section-images-wrapper">
          {firstSectionImg.map(
            (
              image,
              index, //use the index of each image
            ) => (
              <li key={image.id}>
                <img
                  className={`room-image ${currentImg === index ? "active" : ""}`} //Refer to index instead
                  src={`${import.meta.env.BASE_URL}${image.src}`}
                  alt={`banner image ${image.id}`}
                  loading="eager"
                />
              </li>
            ),
          )}
        </ul>
        <div className="first-section-content">
          {firstSectionText.map((item, index) => (
            <React.Fragment key={index}>
              <h1>{item.mainTitle}</h1>
              <p>{item.mainTitleText}</p>
              <Link type="button" className="book-button" to={"/roomReserve"}>
                {item.btn}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default FirstSection;
