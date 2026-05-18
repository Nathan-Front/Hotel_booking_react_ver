import "./roomsThirdSection.css";
import { mostBooked } from "./data/roomsThirdSection.js";
import { useState, useEffect, useRef } from "react";
import { internetCommunication } from "../roomReserve-components/room-more-details/data/singleMoreDetail.js";
function RoomsThirdSection() {
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
      { threshold: 0, rootMargin: "0px" },
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
        className={
          show ? "rooms-third-section slideComment" : "rooms-third-section"
        }
        ref={sectionRef}
      >
        <h2>Our mostly booked rooms</h2>
        <p>Here are some feedbacks from our beloved customers</p>
        <ul className="most-booked-wrapper">
          {mostBooked.map((room) => (
            <li className="most-booked-panels" key={room.name}>
              <div className="most-booked-images">
                <img
                  src={`${import.meta.env.BASE_URL}${room.src}`}
                  alt={`${room.name}-image`}
                  loading="lazy"
                />
              </div>
              <div className="recommend-rooms">
                <h3>{room.name}</h3>
                <div className="star-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <i
                      key={index}
                      className={`ratings 
                        ${index < room.rate ? "fa fa-star" : "fa fa-star-o"}
                      `}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="recommend-details">
                <p>{room.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default RoomsThirdSection;
