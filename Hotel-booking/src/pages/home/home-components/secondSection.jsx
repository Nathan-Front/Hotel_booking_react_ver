import "./secondSection.css";
import { secondSectionImg } from "./data/secondSection";

function SecondSection() {
  return (
    <>
      <section className="second-section">
        <h2 className="section-titles">Our Rooms</h2>
        <p>Here are the room options available at our hotel:</p>
        <ul className="index-room-wrapper">
          {secondSectionImg.map((image) => (
            <li className="index-room-panels" key={image.name}>
              <div className="index-room-images">
                <img
                  src={`${import.meta.env.BASE_URL}${image.src}`}
                  alt={`${image.name}-image`}
                  loading="lazy"
                />
              </div>
              <h3>{image.name}</h3>
              <p>{image.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SecondSection;
