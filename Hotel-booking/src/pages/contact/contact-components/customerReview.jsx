import "./customerReview.css";
import { review } from "./customerReview.js";
import { useState, useEffect, useRef } from "react";
function CustomerReview() {
  const [slideView, setSlideView] = useState(3);
  const [isReviewIndex, setIsReviewIndex] = useState(0);
  useEffect(() => {
    const updateSlides = () => {
      setIsReviewIndex(0);
      if (window.innerWidth <= 599) {
        setSlideView(1);
      } else if (window.innerWidth <= 768) {
        setSlideView(2);
      } else {
        setSlideView(3);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = review.length - slideView;
  const nxtBtn = () => {
    setIsReviewIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  const prevBtn = () => {
    setIsReviewIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState();
  useEffect(() => {
    if (!trackRef.current) return;
    const updateWidth = () => {
      const track = trackRef.current;
      const slide = track.querySelector(".review-carousel-items");
      const style = window.getComputedStyle(track);
      const gap = parseInt(style.columnGap || style.gap) || 0;
      const slideWidth = slide.offsetWidth + gap;
      setTranslateX(isReviewIndex * slideWidth);
    };

    // Create an observer that watches the carousel's actual size
    const observer = new ResizeObserver(() => {
      updateWidth();
    });
    observer.observe(trackRef.current);
    // Also run it once immediately
    updateWidth();
    return () => observer.disconnect();
  }, [isReviewIndex, slideView]);

  const dotsClick = (index) => {
    setIsReviewIndex(index);
  };

  const [touchStart, setTouchStart] = useState();
  const [touchEnd, setTouchEnd] = useState();
  const miniSwipeDistance = 50;

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
    if (distance > miniSwipeDistance) {
      setIsReviewIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
    if (distance < -miniSwipeDistance) {
      setIsReviewIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  return (
    <>
      <section className="customer-review-section">
        <div>
          <h2>Here's what our customers are saying</h2>
        </div>
        <div className="review-carousel-main-wrap">
          <ul
            className="review-carousel-wrapper"
            ref={trackRef}
            style={{ transform: `translateX(-${translateX}px)` }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
          >
            {review.map((item) => (
              <li className="review-carousel-items" key={item.name}>
                <div>
                  <img
                    src={`${import.meta.env.BASE_URL}${item.src}`}
                    alt="customer image"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p>{item.message}</p>
                </div>
                <div>
                  <h4>{item.name}</h4>
                </div>
              </li>
            ))}
          </ul>
          <div className="review-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <span
                key={index}
                className={`${isReviewIndex === index ? "review-Active" : ""}`}
                onClick={() => dotsClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <button type="button" className="prevRev" onClick={prevBtn}>
          ‹
        </button>
        <button type="button" className="nextRev" onClick={nxtBtn}>
          ›
        </button>
      </section>
    </>
  );
}

export default CustomerReview;
