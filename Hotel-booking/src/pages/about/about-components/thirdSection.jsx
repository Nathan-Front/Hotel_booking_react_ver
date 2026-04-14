import "./thirdSection.css";
import { timeline } from "./data/thirdSection.js";
function ThirdSection() {
  return (
    <>
      <section className="timeline-section">
        <div className="section-timeline-wrap">
          <div className="section-timeline-head">
            <div className="container-wrap">
              <div className="padding-vertical">
                <div className="timeline-heading-wrapper">
                  <div className="margin-bottom-heading">
                    <h3>Our Timeline</h3>
                  </div>
                  <p>
                    Our founders set out with a simple mission: to create a
                    hotel that blends comfort, elegance, and heartfelt
                    hospitality. Planning and architectural design began with a
                    focus on timeless design and guest-centered spaces.
                  </p>
                  <p>
                    Discover the milestones and achievements that define our
                    hotel's journey over the years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-timeline">
          <div className="container-wrap">
            <div className="timeline-component">
              <div className="timeline-progress">
                <div className="timeline-progress-bar"></div>
              </div>
              {timeline.map((item) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-left">
                    <div className="timeline-date">
                      <p>{item.year}</p>
                    </div>
                  </div>
                  <div className="timeline-center">
                    <div className="timeline-circle"></div>
                  </div>
                  <div className="timeline-right">
                    <div className="margin-bottom">
                      <div className="timeline-text">
                        <p>{item.text}</p>
                      </div>
                    </div>
                    <div className="timeline-image-wrap">
                      <img
                        className="timeline-images"
                        src={`${import.meta.env.BASE_URL}${item.src}`}
                        alt={`${item.alt}-image`}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="overlay-fade-top"></div>
              <div className="overlay-fade-bottom"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThirdSection;
