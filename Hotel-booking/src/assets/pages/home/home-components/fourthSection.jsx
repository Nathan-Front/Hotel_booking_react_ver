import "./fourthSection.css";
import { fourthSectionImage } from "./data/fourthSection";
import { useState, useEffect, useRef } from "react";
function FourthSection() {
  const [curentImg, setCurrentImg] = useState(4);
  useEffect(() => {
    const handleImagePreview = () => {
      if (window.innerWidth <= 599) {
        setCurrentImg(2);
      } else if (window.innerHeight <= 768) {
        setCurrentImg(3);
      } else {
        setCurrentImg(4);
      }
    };
    handleImagePreview();
    window.addEventListener("resize", handleImagePreview);
    return () => window.removeEventListener("resize", handleImagePreview);
  }, [curentImg]);

  const maxIndex = Math.max(0, fourthSectionImage.length - curentImg);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nxtBtn = () => {
    setCurrentIndex((prev) => (prev === maxIndex - 1 ? 0 : prev + 1));
  };
  const prevBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
  };

  const trackRef = useRef();
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector(".gallery-image");
    if (slide) {
      const style = window.getComputedStyle(track);
      const gap = parseInt(style.gap) || 0;
      const slideWidth = slide.offsetWidth + gap;
      setTranslateX(currentIndex * slideWidth);
    }
  }, [currentIndex]);

  return (
    <>
      <section className="fourth-section">
        <h2 className="section-titles">Gallery</h2>
        <div className="gallery-main-wrapper">
          <ul
            className="gallery-wrapper"
            ref={trackRef}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {fourthSectionImage.map((image) => (
              <li className="gallery-image" key={image.name}>
                <img
                  src={`${import.meta.env.BASE_URL}${image.src}`}
                  alt={`${image.name}-image`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
          <div className="slider-dots"></div>
        </div>
        <button type="button" className="prev" onClick={prevBtn}>
          ‹
        </button>
        <button type="button" className="next" onClick={nxtBtn}>
          ›
        </button>
      </section>
    </>
  );
}

export default FourthSection;
