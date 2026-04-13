import {
  familyBedFullLeftImg,
  familyBedList,
  secondListFamily,
  toiletriesFamily,
  roomLayoutFurnish,
  accessibility,
  cleaningService,
  internetCommunication,
  familyBathrooms,
  foodDrinks,
  familyAmenities,
  tvMedia,
  kitchen,
  generalAmenities,
  familyBedExtras,
} from "./data/singleMoreDetail.js";

function FamilyMore({ isMoreDetails, setIsMoreDetails }) {
  if (isMoreDetails) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
    return null;
  }

  return (
    <>
      <div className={`lock-wrapper ${isMoreDetails ? "active" : ""}`}>
        <div
          className={`more-details-wrapper ${isMoreDetails ? "active" : ""}`}
        >
          <div className="close-button" onClick={() => setIsMoreDetails(false)}>
            X
          </div>
          <div className="more-details-container">
            <div className="left-container">
              {familyBedFullLeftImg.map((item) => (
                <img
                  key={item.id}
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={`${item.id}-image`}
                />
              ))}
            </div>
            <div className="right-container">
              <div>
                <h3>Family Suite</h3>
              </div>
              <div className="right-more-details-container">
                {familyBedList.map((item) => (
                  <div key={item.name}>
                    <ul className="bed-image-wrapper">
                      <li>
                        <img
                          className="more-logo"
                          src={`${import.meta.env.BASE_URL}${item.src}`}
                          alt={`${item.name}-image`}
                        />
                        <p>{item.name}</p>
                      </li>
                    </ul>
                    <p>{item.extra}</p>
                  </div>
                ))}
                <ul>
                  {secondListFamily.map((item) => (
                    <li key={item.name}>
                      <img
                        className="more-logo"
                        src={`${import.meta.env.BASE_URL}${item.src}`}
                        alt={`${item.alt}-image`}
                      />
                      <p>
                        {item.name} {item.name.includes("24.5") && <sup>2</sup>}
                      </p>
                    </li>
                  ))}
                </ul>
                <div>
                  <h4>Toiletries</h4>
                  <ul>
                    {toiletriesFamily.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src={`${import.meta.env.BASE_URL}images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg`}
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Room layout and furnishings</h4>
                  <ul>
                    {roomLayoutFurnish.map((item) => (
                      <li key={item.name}>
                        <img
                          className="circle-check-logo"
                          src={`${import.meta.env.BASE_URL}images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg`}
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Accessibility</h4>
                  <ul>
                    {accessibility.map((item) => (
                      <li key={item.name}>
                        <img
                          className="circle-check-logo"
                          src={`${import.meta.env.BASE_URL}images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg`}
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Cleaning Service</h4>
                  <ul>
                    {cleaningService.map((item) => (
                      <li key={item.name}>
                        <img
                          className="circle-check-logo"
                          src={`${import.meta.env.BASE_URL}images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg`}
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Internet & Communications</h4>
                  <ul>
                    {internetCommunication.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src={`${import.meta.env.BASE_URL}images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg`}
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Bathrooms</h4>
                  <ul>
                    {familyBathrooms.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src={`${import.meta.env.BASE_URL}images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg`}
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Food & Drinks</h4>
                  <ul>
                    {foodDrinks.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src="./images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg"
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Room Ameneties</h4>
                  <ul>
                    {familyAmenities.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src="./images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg"
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Media & Technology</h4>
                  <ul>
                    {tvMedia.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src="./images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg"
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Kitchen Facilities</h4>
                  <ul>
                    {kitchen.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src="./images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg"
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>General Amenities</h4>
                  <ul>
                    {generalAmenities.map((item) => (
                      <li
                        className={`${item.name.includes("none") ? "not-available" : ""}`}
                        key={item.name}
                      >
                        <img
                          className="circle-check-logo"
                          src="./images/rooms/reserve/more details/logo/circle-check-svgrepo-com.svg"
                          alt="circle check logo"
                        />
                        <p>
                          {item.name.includes("none") ||
                          item.name.includes("have")
                            ? item.name.slice(0, -4)
                            : item.name}
                          {item.name.includes("have") && (
                            <span className="free"> Free</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Cribs & Extra Beds</h4>
                  {familyBedExtras.map((item) => (
                    <div key={item.name}>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FamilyMore;
