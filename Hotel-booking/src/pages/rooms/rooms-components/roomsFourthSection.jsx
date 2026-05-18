import "./roomsFourthSection.css";
import { firstFAQs } from "./data/roomsFourthSection";
import { useState, useEffect, useRef } from "react";
function RoomsFourthSection() {
  const firstHalf = firstFAQs.slice(0, 5);
  const secondHalf = firstFAQs.slice(5);

  const [isFaqIndex, setIsFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setIsFaqIndex(isFaqIndex === index ? null : index);
  };

  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
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
      { threshold: 0.4, rootMargin: "0px" },
    );
    const refs = [titleRef.current, leftRef.current, rightRef.current];
    refs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <>
      <section className="rooms-fourth-section">
        <h2 className={show ? "slideTitle" : ""} ref={titleRef}>
          Frequently Asked Questions
        </h2>
        <div>
          <ul
            className={
              show ? "faq-wrapper left-wrap slideLeft" : "faq-wrapper left-wrap"
            }
            ref={leftRef}
          >
            {firstHalf.map((QA, index) => (
              <li className="faq-panels" key={index}>
                <div className="faq-item">
                  <button
                    type="button"
                    className={`faq-question ${isFaqIndex === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {QA.question}
                  </button>
                  {isFaqIndex === index && (
                    <div className="faq-answer">
                      <p>{QA.answer}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <ul
            className={
              show
                ? "faq-wrapper right-wrap slideRight"
                : "faq-wrapper right-wrap"
            }
            ref={rightRef}
          >
            {secondHalf.map((QA, index) => {
              const actualIndex = index + 5;
              return (
                <li className="faq-panels" key={actualIndex}>
                  <div className="faq-item">
                    <button
                      type="button"
                      className={`faq-question ${isFaqIndex === actualIndex ? "active" : ""}`}
                      onClick={() => toggleFAQ(actualIndex)}
                    >
                      {QA.question}
                    </button>
                    {isFaqIndex === actualIndex && (
                      <div className="faq-answer">
                        <p>{QA.answer}</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default RoomsFourthSection;
