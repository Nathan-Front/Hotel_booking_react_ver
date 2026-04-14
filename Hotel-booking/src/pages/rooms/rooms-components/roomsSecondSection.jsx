import "./roomsSecondSection.css";
import { useNavigate } from "react-router-dom";
import { roomOffer } from "./data/roomsSecondSection.js";
function RoomsSecondSection() {
  const childLink = [
    { link: "twin-bed-single-rooms" },
    { link: "twin-bed-full-rooms" },
    { link: "double-bed-rooms" },
    { link: "queen-rooms" },
    { link: "king-rooms" },
    { link: "family-rooms" },
  ];
  const navigate = useNavigate();
  const goToLink = (index) => {
    const clickedIndex = childLink[index].link;
    const reserveExist = JSON.parse(localStorage.getItem("reservedRoom")) || [];
    if (reserveExist.length > 0) {
      navigate("/reserveRoomForm");
    } else {
      navigate(`/roomReserve#${clickedIndex}`);
    }
  };
  return (
    <>
      <section className="rooms-second-section">
        <h2>Rooms</h2>
        <ul className="rooms-room-wrapper">
          {roomOffer.map((room, index) => (
            <li
              className="rooms-room-panels"
              key={room.id}
              onClick={() => goToLink(index)}
            >
              <div>
                <div className="rooms-room-images">
                  <img
                    src={`${import.meta.env.BASE_URL}${room.src}`}
                    alt={`${room.name}-image`}
                    loading="lazy"
                  />
                </div>
                <h3>{room.name}</h3>
                <p>${room.price} per night</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default RoomsSecondSection;
