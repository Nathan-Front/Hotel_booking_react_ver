import "./reserveRoom.css";
import { paymentImg, otherPaymentImg } from "./data/reserveForm.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function ReserveRoomForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const nights = useMemo(() => {
    if (!startDate || !endDate) return 0;
    return (endDate - startDate) / (1000 * 60 * 60 * 24);
  }, [startDate, endDate]);

  const [roomCount, setRoomCount] = useState(0);
  const reserve = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("reservedRoom")) || [];
    } catch (e) {
      return [];
    }
  }, []);
  const price = nights * reserve[0]?.price * roomCount;

  const totalPrice = useMemo(() => {
    if (!reserve.length || !reserve[0]) return 0;
    const priceOff = price * reserve[0].off;
    const offPrice = price - priceOff;
    const taxedPrice = price * reserve[0].tax;
    const specialPrice = price * reserve[0].special;
    const totalPrice = offPrice + taxedPrice + specialPrice;
    return { priceOff, totalPrice };
  }, [reserve, price]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
    localStorage.removeItem("reservedRoom");
  };
  return (
    <>
      <section className="reserveRoom-html" id="reserveRoom-wrapper">
        <form action="" id="final-step-form" className="form-section">
          <div className="input-label-wrap">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="input-label-wrap">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="input-label-wrap">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-label-wrap">
            <label htmlFor="phone">Phone Number:</label>
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
                <label htmlFor="creditCard">Credit Card/Debit card</label>
                {paymentImg.map((item) => (
                  <img
                    key={item.name}
                    src={`${import.meta.env.BASE_URL}${item.src}`}
                    alt={`${item.name}-image`}
                  />
                ))}
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
              <label htmlFor="paypal">Other payment method</label>
              {otherPaymentImg.map((item) => (
                <img
                  key={item.name}
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={`${item.name}-image`}
                />
              ))}
            </div>
          </div>
          <div className="submit-button">
            <button
              type="button"
              className="cancel-reservation-button"
              onClick={handleNavigate}
            >
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
              <label htmlFor="room">Room</label>
              <select
                id="room"
                name="room"
                onChange={(e) => setRoomCount(e.target.value)}
              >
                <option value="">-- Select Room --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="date-picker-wrapper">
                <label htmlFor="dateRange"></label>
                <DatePicker
                  id="dateRange"
                  selected={startDate}
                  onChange={(dates) => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
          </div>
          <div className="payment-summary-wrap">
            <h3>Payment Summary</h3>
            <div>
              <p>
                <span className="room-count">{`${roomCount} Room${roomCount > 1 ? "s" : ""} `}</span>
                <span className="night-count">{`${nights} Room${nights > 1 ? "s" : ""} `}</span>
              </p>
              <p>
                Price before discounts:{" "}
                <span className="price-before-discounts">{price}</span>
              </p>
              <p>
                Special discounts:{" "}
                <span className="special-discounts">
                  {reserve[0].off !== 0 ? reserve[0].off * 100 : 0}%
                </span>
              </p>
            </div>
            <div>
              <p>Tax & Fees</p>
              <p>
                Vat: <span className="vat">{reserve[0].tax * 100}%</span>
              </p>
              <p>
                Service charge: <span className="service-price">10%</span>
              </p>
            </div>
            <div>
              <h3>
                Total: $
                <span className="total-payment">
                  {totalPrice.length !== 0 ? totalPrice.totalPrice : 0}
                </span>
              </h3>
              <p>
                You saved $
                <span className="total-saved">
                  {totalPrice.length !== 0 ? totalPrice.priceOff : 0}
                </span>
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
