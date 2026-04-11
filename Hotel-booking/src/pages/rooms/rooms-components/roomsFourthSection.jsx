import "./roomsFourthSection.css";
import { firstFAQs, secondFAQs } from "./data/roomsFourthSection";
import { useState } from "react";
function RoomsFourthSection() {
  const firstHalf = firstFAQs.slice(0, 5);
  const secondHalf = firstFAQs.slice(5);

  const [isFaqIndex, setIsFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setIsFaqIndex(isFaqIndex === index ? null : index);
    console.log(index);
  };

  return (
    <>
      <section className="rooms-fourth-section">
        <h2>Frequently Asked Questions</h2>
        <div>
          <ul className="faq-wrapper">
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
          <ul className="faq-wrapper">
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
