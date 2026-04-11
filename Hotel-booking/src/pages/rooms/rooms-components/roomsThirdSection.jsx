import "./roomsThirdSection.css";
import { mostBooked } from "./data/roomsThirdSection";
function RoomsThirdSection() {
  return (
    <>
      <section className="rooms-third-section">
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
