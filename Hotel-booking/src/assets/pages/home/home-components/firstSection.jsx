import "./firstSection.css";
import { firstSectionImg } from "./data/firstSection";
import { useState, useEffect } from "react";
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
                  loading="lazy"
                />
              </li>
            ),
          )}
        </ul>
        <div className="first-section-content">
          <h1>Welcome to Hotel C</h1>
          <p>
            Your comfort is our priority. Experience luxury and relaxation at
            its finest.
          </p>
          <button type="button" className="book-button">
            Book Now
          </button>
        </div>
      </section>
    </>
  );
}

export default FirstSection;
