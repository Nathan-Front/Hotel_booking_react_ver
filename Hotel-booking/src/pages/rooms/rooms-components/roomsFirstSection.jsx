import "./roomsFirstSection.css";

function RoomsFirstSection() {
  return (
    <>
      <section className="rooms-first-section">
        <form action="" id="rooms-form" className="rooms-form-wrapper">
          <div className="check-in-out-wrapper">
            <div className="input-group">
              <label htmlFor="checkin">Check-in</label>
              <input type="date" id="checkin" required />
            </div>

            <div className="input-group">
              <label htmlFor="checkout">Check-out</label>
              <input type="date" id="checkout" required />
            </div>
          </div>
          <div className="user-reserve-info-wrapper">
            <div className="reserve-counter">
              <img
                src="./images/rooms/logo/user-alt-1-svgrepo-com.svg"
                alt="user logo"
              />
            </div>
            <div className="reserve-counter">
              <span id="adult-counter">0</span>
              <p>Adult</p>
            </div>
            <div className="reserve-counter">
              <span id="children-counter">0</span>
              <p>Children</p>
            </div>
            <div className="reserve-counter">
              <span id="room-counter">0</span>
              <p>Rooms</p>
            </div>
            <div className="reserve-info-wrapper">
              <div className="reserve-count-wrapper">
                <label className="labels" htmlFor="adult-input">
                  Adults
                </label>
                <div className="counter">
                  <button
                    type="button"
                    className="decrease-button"
                    data-target="adult-counter"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="adult-input"
                    name="adults"
                    value="0"
                    min="0"
                    max="10"
                    readOnly
                  />
                  <button
                    type="button"
                    className="increase-button"
                    data-target="adult-counter"
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
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="children-input"
                    name="children"
                    value="0"
                    min="0"
                    max="10"
                    readOnly
                  />
                  <button
                    type="button"
                    className="increase-button"
                    data-target="children-counter"
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
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="rooms-input"
                    name="rooms"
                    value="0"
                    min="0"
                    max="10"
                    readOnly
                  />
                  <button
                    type="button"
                    className="increase-button"
                    data-target="room-counter"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="children-note">
                <p>Children are age 17 years old and below</p>
              </div>
            </div>
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
