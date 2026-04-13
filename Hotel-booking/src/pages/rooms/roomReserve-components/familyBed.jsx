import {
  familyBedImg,
  summaryList,
  roomDescription,
  prices,
} from "./data/familyBed.js";
import { useState, useRef, useLayoutEffect } from "react";
import FamilyMore from "./room-more-details/familyMore.jsx";
import { Link } from "react-router-dom";

function FamilyBed() {
  const [isMoreDetails, setIsMoreDetails] = useState(false);
  const openMoreDetails = () => {
    if (isMoreDetails === false) {
      setIsMoreDetails(true);
    } else {
      setIsMoreDetails(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("450px"); //Need to get css height to match
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("450px");
    }
  }, [isOpen]);

  const toggleRooms = () => setIsOpen(!isOpen);

  const handleTransitionEnd = () => {
    if (isOpen) setHeight("auto");
  };
  return (
    <>
      <section className="reserve-section" id="family-rooms">
        <h3>Family Suite</h3>
        <p>*Please contact us if the family members are more than 6 person.</p>
        <div
          ref={contentRef}
          className={`section-sub-wrapper ${isOpen ? "show-other-rooms" : ""}`}
          onTransitionEnd={handleTransitionEnd}
          style={{ height }}
        >
          <div className="room-left-panel">
            <div className="left-panel-images">
              {familyBedImg.map((item) => (
                <img
                  key={item.name}
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={`${item.name}-image`}
                  className="main-picture"
                />
              ))}
            </div>
            <ul className="left-panel-descript">
              {summaryList.map((item) => (
                <li key={item.name}>
                  <img
                    src={`${import.meta.env.BASE_URL}${item.src}`}
                    alt={`${item.name}-image`}
                  />
                  {item.name === "King Bed" ? (
                    <h4>{item.name}</h4>
                  ) : (
                    <p>
                      {item.name}
                      {item.name.includes("45") && <sup>2</sup>}
                    </p>
                  )}
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="more-button"
                  onClick={openMoreDetails}
                >
                  See more room details
                </button>
              </li>
            </ul>
          </div>

          <div className="room-right-panel">
            <div className="first-room-right-panel">
              <h4>Your Choices</h4>
              <h4>For</h4>
              <h4>Today's Price</h4>
            </div>
            {prices.map((room) => (
              <div className={`${room.name}-room-right-panel`} key={room.room}>
                <ul className="right-panel-descript">
                  {roomDescription.map((item) => (
                    <li key={item.name}>
                      <img
                        src={`${import.meta.env.BASE_URL}${item.src}`}
                        alt={`${item.name.includes("Optional") ? "breakfast" : item.name}-image`}
                      />
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
                <div className="person-wrapper">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <img
                      key={index}
                      className="person"
                      src={`${import.meta.env.BASE_URL}images/rooms/reserve/logo/person.svg`}
                      alt="person"
                    />
                  ))}
                  <span>～</span>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <img
                      key={index}
                      className="person"
                      src={`${import.meta.env.BASE_URL}images/rooms/reserve/logo/person.svg`}
                      alt="person"
                    />
                  ))}
                </div>
                <div className="price-main-wrapper">
                  <h3>Room: {room.room}</h3>
                  <ul className="price-wrapper">
                    <li className="special-price">
                      <p className="special-discount">Special Discount:</p>
                      <span className="percent-off">{room.off * 100}% OFF</span>
                    </li>
                    <li className="room-price">
                      {room.off !== 0.0 && (
                        <p className="original-price">
                          ${room.price.toFixed(2)}
                        </p>
                      )}
                      <span>{`$${room.off === 0.0 ? room.price.toFixed(2) : (room.price - room.price * room.off).toFixed(2)}`}</span>
                    </li>
                    <li>
                      <p>
                        {`Total (incl. taxes & fees):`}{" "}
                        <span className="total-price">
                          $
                          {(
                            (room.price - room.price * room.off) * room.tax +
                            (room.price - room.price * room.off)
                          ).toFixed(2)}
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>Additional charges may apply</p>
                    </li>
                  </ul>
                  <Link className="reserve-room-button" to={"/reserveRoomForm"}>
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`more-rooms ${isOpen ? "active" : ""}`}
          onClick={toggleRooms}
        >
          {isOpen ? "Show fewer rooms" : "Show more rooms"}{" "}
          <span className="triangle"></span>
        </button>
      </section>
      <FamilyMore
        isMoreDetails={isMoreDetails}
        setIsMoreDetails={setIsMoreDetails}
      />
    </>
  );
}

export default FamilyBed;
