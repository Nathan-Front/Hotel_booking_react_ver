import "./reserveRoom.css";
import {
  paymentImg,
  otherPaymentImg,
  policy,
  toFinalStep,
} from "./data/reserveForm.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

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
    } catch {
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
    return { specialPrice, totalPrice };
  }, [reserve, price]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
    localStorage.removeItem("reservedRoom");
  };

  const [isForm, setIsForm] = useState({
    firstName: "",
    familyName: "",
    email: "",
    contact: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setIsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const mergeData = {
      ...isForm,
      roomCount: roomCount,
      checkIn: startDate.toISOString().split("T")[0],
      checkOut: endDate.toISOString().split("T")[0],
      nightsCount: nights,
      discount: reserve[0].off * 100,
      tax: reserve[0].tax * 100,
      service: reserve[0].special,
      totalPayment: totalPrice.totalPrice,
      savedPrice: totalPrice.specialPrice,
    };
    if (roomCount === 0) {
      alert("Select room count.");
      return;
    }
    if (nights === 0) {
      alert("Please select dates.");
      return;
    }
    const isFormComplete = Object.values(isForm).every((value) => !!value);
    if (!isFormComplete) {
      alert("Please fill in all necessary details before proceeding!");
      return;
    }
    const reserveData = toFinalStep(mergeData);
    if (reserveData.success === true) {
      const info = JSON.parse(localStorage.getItem("reservedRoom"));
      alert(`Thank you ${info[1].firstName}! 
Room type: ${info[0].roomType}
Your reservation date: ${info[1].checkIn}～${info[1].checkOut}
Selected room: ${info[1].roomCount} room${info[1].roomCount > 1 ? "s" : ""} 
Total payment: $${Number(info[1].totalPayment).toFixed(2)}
See next page for final process.`);
      localStorage.removeItem("reservedRoom");
      navigate(-1);
    } else {
      alert("Something went wrong.");
    }
  };
  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
  };
  console.log(import.meta.env);
  console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID);
  return (
    <>
      <section className="reserveRoom-html" id="reserveRoom-wrapper">
        <div className="room-selected-summary">
          <div className="selected-room-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}${reserve[0]?.roomImage}`}
              alt="reserved room image"
              id="reserve-image"
            />
            <h2 className="selected-room-type">{reserve[0]?.roomType}</h2>
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
                onChange={(e) => setRoomCount(Number(e.target.value))}
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
                <span className="night-count">{`${nights} Night${nights > 1 ? "s" : ""} `}</span>
              </p>
              <p>
                Price before discounts:{" "}
                <span className="price-before-discounts">{price || 0}</span>
              </p>
              <p>
                Special discounts:{" "}
                <span className="special-discounts">
                  {reserve[0]?.off !== 0 ? reserve[0]?.off * 100 : 0}%
                </span>
              </p>
            </div>
            <div>
              <p>Tax & Fees</p>
              <p>
                Vat: <span className="vat">{reserve[0]?.tax * 100}%</span>
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
                  {totalPrice.length !== 0 ? totalPrice.specialPrice : 0}
                </span>
              </p>
            </div>
          </div>
          <div className="cancelation-wrap">
            <h3>Cancelation Policy</h3>
            <p>{policy[0].policy}</p>
          </div>
        </div>
        <PayPalScriptProvider options={initialOptions}>
          <div className="form-section">
            <div className="input-label-wrap">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={isForm.firstName}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-label-wrap">
              <label htmlFor="lastName">Family Name:</label>
              <input
                type="text"
                id="lastName"
                name="familyName"
                value={isForm.familyName}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-label-wrap">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={isForm.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-label-wrap">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="contact"
                value={isForm.contact}
                onChange={handleInput}
                required
              />
            </div>
            <div className="paypal-button-container">
              <PayPalButtons
                style={{
                  layout: "vertical",
                  shape: "rect",
                  color: "gold",
                  height: 50,
                }}
                //Validation Logic
                onClick={(data, actions) => {
                  if (
                    !isForm.firstName.trim() ||
                    !isForm.familyName.trim() ||
                    !isForm.email.trim() ||
                    !isForm.contact.trim()
                  ) {
                    alert("Please fill the form first");
                    return actions.reject();
                  }
                  return actions.resolve();
                }}
                //Create Order (Backend Call)
                createOrder={async () => {
                  const response = await fetch(
                    "http://localhost:8080/api/orders",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        customerInfo: {
                          firstName: isForm.firstName,
                          lastName: isForm.familyName,
                          email: isForm.email,
                          contact: isForm.contact,
                        },
                      }),
                    },
                  );
                  const data = await response.json();
                  return data.id; //PayPal Order ID from backend
                }}
                //Capture Payment
                onApprove={async (data) => {
                  try {
                    const response = await fetch(
                      `http://localhost:8080/api/orders/${data.orderID}/capture`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          firstName: isForm.firstName,
                          lastName: isForm.familyName,
                          email: isForm.email,
                          contact: isForm.contact,
                          roomCount,
                          checkIn: startDate.toISOString().split("T")[0],
                          checkOut: endDate.toISOString().split("T")[0],
                          nights,
                          totalPayment: totalPrice.totalPrice,
                          roomType: reserve[0]?.roomType,
                        }),
                      },
                    );

                    const captureData = await response.json();

                    if (captureData.paypal?.status === "COMPLETED") {
                      alert("Payment successful!");
                      console.log(captureData);
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }}
              />
            </div>
            <div className="submit-button">
              <button
                type="button"
                className="cancel-reservation-button"
                onClick={handleNavigate}
              >
                Cancel Reservation
              </button>
              {/*<button
                type="submit"
                className="final-step-button"
                onClick={handleSubmit}
              >
                Final Step
              </button>*/}
            </div>
          </div>
        </PayPalScriptProvider>
      </section>
    </>
  );
}

export default ReserveRoomForm;
