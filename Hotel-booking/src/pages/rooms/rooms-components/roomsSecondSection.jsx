import "./roomsSecondSection.css";
import { Link } from "react-router-dom";
import { roomOffer } from "./data/roomsSecondSection.js";
function RoomsSecondSection() {
  return (
    <>
      <section className="rooms-second-section">
        <h2>Rooms</h2>
        <ul className="rooms-room-wrapper">
          {roomOffer.map((room) => (
            <li className="rooms-room-panels" key={room.name}>
              <Link href="reserve.html#twin-bed-single-rooms">
                <div className="rooms-room-images">
                  <img
                    src={`${import.meta.env.BASE_URL}${room.src}`}
                    alt={`${room.name}-image`}
                    loading="lazy"
                  />
                </div>
                <h3>{room.name}</h3>
                <p>${room.price} per night</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default RoomsSecondSection;
