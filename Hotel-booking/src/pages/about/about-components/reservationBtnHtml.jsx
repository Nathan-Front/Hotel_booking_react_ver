import "./reservationBtn.css";
import { useNavigate } from "react-router-dom";
function ReservationBtnHtml() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/roomReserve");
  };
  return (
    <>
      <section className="reserve-button-section">
        <div className="reservation-descript-wrap">
          <h1>Ready to Experience Our Hospitality?</h1>
          <p>
            Book your stay with us today and discover the perfect blend of
            comfort, elegance, and exceptional service. We look forward to
            welcoming you!
          </p>
        </div>
        <div className="reservation-button-wrap">
          <a className="about-reserve-button" onClick={handleNavigate}>
            Reserve Now
          </a>
        </div>
      </section>
    </>
  );
}

export default ReservationBtnHtml;
