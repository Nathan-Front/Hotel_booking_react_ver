import "./reserve.css";
import "./room-more-details/moreDetails.css";
import {
  twinBedImg,
  summaryList,
  roomDescription,
  prices,
  roomReserved,
} from "./data/twinBedSingle.js";
import { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import TwinBedSingleMore from "./room-more-details/twinBedSingleMore.jsx";

function TwinBedSingle() {
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

  const navigate = useNavigate();
  const handleNavigate = (room) => {
    navigate("/reserveRoomForm");
    roomReserved(room);
  };

  return (
    <>
      <section className="reserve-section" id="twin-bed-single-rooms">
        <h3>Twin Bed Single Standard</h3>
        <p>*Suitable for two person</p>
        <div
          ref={contentRef}
          className={`section-sub-wrapper ${isOpen ? "show-other-rooms" : ""}`}
          onTransitionEnd={handleTransitionEnd}
          style={{ height }}
        >
          <div className="room-left-panel">
            <div className="left-panel-images">
              {twinBedImg.map((img) => (
                <img
                  key={img.name}
                  src={`${import.meta.env.BASE_URL}${img.src}`}
                  alt={`${img.name}-image`}
                  className={`${img.name === "twin bed single" ? "main-picture" : ""}`}
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
                  {item.name === "Twin Bed (Single)" ? (
                    <h4>{item.name}</h4>
                  ) : (
                    <p>
                      {item.name}
                      {item.name.includes("19") && <sup>2</sup>}
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
                  {Array.from({ length: 1 }).map((_, index) => (
                    <img
                      key={index}
                      className="person"
                      src={`${import.meta.env.BASE_URL}images/rooms/reserve/logo/person.svg`}
                      alt="person"
                    />
                  ))}
                  <span>～</span>
                  {Array.from({ length: 2 }).map((_, index) => (
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
                  <button
                    type="button"
                    className="reserve-room-button"
                    onClick={() => handleNavigate(room)}
                  >
                    Reserve
                  </button>
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
      <TwinBedSingleMore
        isMoreDetails={isMoreDetails}
        setIsMoreDetails={setIsMoreDetails}
      />
    </>
  );
}

export default TwinBedSingle;
