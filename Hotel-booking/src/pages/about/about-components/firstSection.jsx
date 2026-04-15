import "./firstSection.css";
import { bannerTexts } from "./data/firstSection.js";
function FirstSection() {
  return (
    <>
      <section className="about-section">
        <div className="about-descript-wrapper">
          <div className="about-descript">
            <h1>Welcome!</h1>
            {bannerTexts.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div>
          <div className="about-image-wrapper">
            <img
              className="about-banner"
              src={`${import.meta.env.BASE_URL}images/about/firstSection/male-receptionist-suit-offering-room-key.jpg`}
              alt="receptionist"
              loading="eager"
            />
            <img
              className="about-enjoying"
              src={`${import.meta.env.BASE_URL}images/about/firstSection/enjoyingCircle.png`}
              alt="enjoying image"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstSection;
