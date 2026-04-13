import "./reserveRoom.css";

function ReserveRoomForm() {
  return (
    <>
      <section className="reserveRoom-html" id="reserveRoom-wrapper">
        <form action="" id="final-step-form" className="form-section">
          <div className="input-label-wrap">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="input-label-wrap">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="input-label-wrap">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-label-wrap">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="payment-methods">
            <h3>How would you like to pay?</h3>
            <div className="main-payment-method">
              <div className="select-payment">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  required
                />
                <label for="creditCard">Credit Card/Debit card</label>
                <img
                  src="./images/rooms/reserve/logo/master-card-icon.svg"
                  alt="Mastercard logo"
                />
                <img
                  src="./images/rooms/reserve/logo/visa-icon.svg"
                  alt="Visa logo"
                />
                <img
                  src="./images/rooms/reserve/logo/jcb-card-icon.svg"
                  alt="JCB logo"
                />
                <img
                  src="./images//rooms//reserve/logo/unionpay-card-icon.svg"
                  alt="union pay logo"
                />
              </div>
              <div className="card-info">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Card Holder Name" />
                <div className="expiry-cvv">
                  <input type="date" placeholder="Expiry Date (MM/YY)" />
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>
            <div className="other-payment">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                required
              />
              <label for="paypal">Other payment method</label>
              <img
                src="./images/rooms/reserve/logo/paypal-icon.svg"
                alt="Paypal logo"
              />
              <img
                src="./images/rooms/reserve/logo/applepay.svg"
                alt="Apple pay logo"
              />
              <img
                src="./images/rooms/reserve/logo/googlepay.svg"
                alt="Google pay logo"
              />
            </div>
          </div>
          <div className="submit-button">
            <button type="button" className="cancel-reservation-button">
              Cancel Reservation
            </button>
            <button type="submit" className="final-step-button">
              Final Step
            </button>
          </div>
        </form>

        <div className="room-selected-summary">
          <div className="selected-room-wrapper">
            <img
              src="./images/rooms/secondSection/family-room.jpeg"
              alt="reserved room image"
              id="reserve-image"
            />
            <h2 className="selected-room-type">Room Selected</h2>
          </div>
          <div className="date-selection-wrapper">
            <h4>
              Reservation Date:{" "}
              <span className="reservation-date">00/00/00</span>
            </h4>
            <p className="checkin-time">checkin: 15:00</p>
            <p className="checkout-time">checkout: before 11:00</p>
            <div className="select-date-room-container">
              <input
                type="text"
                id="dateRange"
                placeholder="Select date range"
              />
              <label for="room">Room</label>
              <select id="room" name="room">
                <option value="">-- Select Room --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="payment-summary-wrap">
            <h3>Payment Summary</h3>
            <div>
              <p>
                <span className="room-count">0</span> Room(s)
                <span className="night-count">0</span> Night(s)
              </p>
              <p>
                Price before discounts:{" "}
                <span className="price-before-discounts">0</span>
              </p>
              <p>
                Special discounts: <span className="special-discounts">0</span>
              </p>
            </div>
            <div>
              <p>Tax & Fees</p>
              <p>
                Vat: <span className="vat">12%</span>
              </p>
              <p>
                Service charge: <span className="service-price">10%</span>
              </p>
            </div>
            <div>
              <h3>
                Total: $<span className="total-payment">0</span>
              </h3>
              <p>
                You saved $<span className="total-saved">0</span>
              </p>
            </div>
          </div>
          <div className="cancelation-wrap">
            <h3>Cancelation Policy</h3>
            <p>
              This booking cannot be modified, and no refund will be given if
              you cancel it. You'll be charged the cancellation fee if you don't
              check in. If you apply a discount to your booking, the
              cancellation fee will be based on the total you paid.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReserveRoomForm;
