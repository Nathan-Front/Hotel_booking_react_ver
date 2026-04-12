import "./roomsFirstSection.css";
import { useState } from "react";
import { checkAvailable } from "../../../assets/script/rooms.js";

function RoomsFirstSection() {
  const [isAvailableOpen, setIsAvailableOpen] = useState(false);
  const handleCheck = () => {
    if (isAvailableOpen === false) {
      setIsAvailableOpen(true);
    } else {
      setIsAvailableOpen(false);
    }
  };

  const [adultCount, setAdultCount] = useState(0);
  const handleAdults = (count) => {
    if (count === "plus") {
      setAdultCount((prev) => prev + 1);
    } else {
      setAdultCount((prev) => Math.max(0, prev - 1));
    }
  };
  const [childrenCount, setChildrenCount] = useState(0);
  const handleChildren = (count) => {
    if (count === "plus") {
      setChildrenCount((prev) => prev + 1);
    } else {
      setChildrenCount((prev) => Math.max(0, prev - 1));
    }
  };
  const [roomCount, setRoomCount] = useState(0);
  const handleRoom = (count) => {
    if (count === "plus") {
      setRoomCount((prev) => prev + 1);
    } else {
      setRoomCount((prev) => Math.max(0, prev - 1));
    }
  };

  const [isAvailable, setIsAvailable] = useState({
    startDate: "",
    endDate: "",
  });
  const handleDates = (e) => {
    const { name, value } = e.target;
    setIsAvailable((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(isAvailable.startDate) >= new Date(isAvailable.endDate)) {
      alert("Check-out must be after check-in.");
      return;
    }
    const result = checkAvailable(isAvailable.startDate, isAvailable.endDate);
    if (result) {
      alert("Rooms are available on those selected dates.");
    } else {
      alert("We are sorry, but no rooms available on those selected dates.");
    }
  };

  return (
    <>
      <section className="rooms-first-section">
        <form
          action=""
          id="rooms-form"
          className="rooms-form-wrapper"
          onSubmit={handleSubmit}
        >
          <div className="check-in-out-wrapper">
            <div className="input-group">
              <label htmlFor="checkin">Check-in</label>
              <input
                type="date"
                id="checkin"
                name="startDate"
                value={isAvailable.startDate}
                onChange={handleDates}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="checkout">Check-out</label>
              <input
                type="date"
                id="checkout"
                name="endDate"
                value={isAvailable.endDate}
                onChange={handleDates}
                required
              />
            </div>
          </div>
          <div className="user-reserve-info-wrapper" onClick={handleCheck}>
            <div className="reserve-counter">
              <img
                src="./images/rooms/logo/user-alt-1-svgrepo-com.svg"
                alt="user logo"
              />
            </div>
            <div className="reserve-counter">
              <span id="adult-counter">{adultCount}</span>
              <p>Adult</p>
            </div>
            <div className="reserve-counter">
              <span id="children-counter">{childrenCount}</span>
              <p>Children</p>
            </div>
            <div className="reserve-counter">
              <span id="room-counter">{roomCount}</span>
              <p>Rooms</p>
            </div>
            {isAvailableOpen === true && (
              <div
                className="reserve-info-wrapper"
                onClick={(e) => e.stopPropagation(false)}
              >
                <div className="reserve-count-wrapper">
                  <label className="labels" htmlFor="adult-input">
                    Adults
                  </label>
                  <div className="counter">
                    <button
                      type="button"
                      className="decrease-button"
                      data-target="adult-counter"
                      onClick={() => handleAdults("minus")}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="adult-input"
                      name="adults"
                      value={adultCount}
                      min="0"
                      max="10"
                      readOnly
                    />
                    <button
                      type="button"
                      className="increase-button"
                      data-target="adult-counter"
                      onClick={() => handleAdults("plus")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="reserve-count-wrapper">
                  <label className="labels" htmlFor="children-input">
                    Children
                  </label>
                  <div className="counter">
                    <button
                      type="button"
                      className="decrease-button"
                      data-target="children-counter"
                      onClick={() => handleChildren("minus")}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="children-input"
                      name="children"
                      value={childrenCount}
                      min="0"
                      max="10"
                      readOnly
                    />
                    <button
                      type="button"
                      className="increase-button"
                      data-target="children-counter"
                      onClick={() => handleChildren("plus")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="reserve-count-wrapper">
                  <label className="labels" htmlFor="rooms-input">
                    Rooms
                  </label>
                  <div className="counter">
                    <button
                      type="button"
                      className="decrease-button"
                      data-target="room-counter"
                      onClick={() => handleRoom("minus")}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="rooms-input"
                      name="rooms"
                      value={roomCount}
                      min="0"
                      max="10"
                      readOnly
                    />
                    <button
                      type="button"
                      className="increase-button"
                      data-target="room-counter"
                      onClick={() => handleRoom("plus")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="children-note">
                  <p>Children are age 17 years old and below</p>
                </div>
              </div>
            )}
          </div>
          <div className="check-button">
            <button type="submit" className="check-available-button">
              Check Availability
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default RoomsFirstSection;
