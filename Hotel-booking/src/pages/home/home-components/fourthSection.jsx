import "./fourthSection.css";
import { fourthSectionImage } from "./data/fourthSection";
import { useState, useEffect, useRef } from "react";
function FourthSection() {
  const [currentImg, setCurrentImg] = useState(4);
  useEffect(() => {
    const handleImagePreview = () => {
      if (window.innerWidth <= 599) {
        setCurrentImg(2);
      } else if (window.innerWidth <= 768) {
        setCurrentImg(3);
      } else {
        setCurrentImg(4);
      }
    };
    handleImagePreview();
    window.addEventListener("resize", handleImagePreview);
    return () => window.removeEventListener("resize", handleImagePreview);
  }, [currentImg]);

  const maxIndex = Math.max(0, fourthSectionImage.length - currentImg);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nxtBtn = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  const prevBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;

    const slide = track.querySelector(".gallery-image");
    if (slide) {
      const style = window.getComputedStyle(track);
      const gap = parseInt(style.columnGap || style.gap) || 0;
      const slideWidth = slide.getBoundingClientRect().width + gap;
      setTranslateX(currentIndex * slideWidth);
    }
  }, [currentIndex, maxIndex]);
  const handleDots = (index) => {
    setCurrentIndex(index);
  };
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const miniSwipteDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > miniSwipteDistance) {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
    if (distance < -miniSwipteDistance) {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);
  useEffect(() => {
    const handleWidth = () => {
      setIsMobile(window.innerWidth <= 599);
    };
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return (
    <>
      <section className="fourth-section">
        <h2 className="section-titles">Gallery</h2>
        <div className="gallery-main-wrapper">
          <ul
            className="gallery-wrapper"
            ref={trackRef}
            style={{ transform: `translateX(-${translateX}px)` }}
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchMove={isMobile ? onTouchMove : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
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
          <div className="slider-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`${currentIndex === index ? "galleryActive" : ""}`}
                onClick={() => handleDots(index)}
              ></button>
            ))}
          </div>
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
