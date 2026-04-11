import "./thirdSection.css";

function ThirdSection() {
  return (
    <>
      <section className="third-section">
        <div className="index-about-us">
          <h2 className="section-titles">About Us</h2>
          <p>
            Welcome to Hotel C, where luxury meets comfort. Our hotel offers a
            perfect blend of modern amenities and traditional hospitality.
            Whether you're here for business or leisure, we ensure an
            unforgettable stay. Take a look around and discover what makes us
            the ideal choice for your next visit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolorem ipsam excepturi, laudantium
            error expedita porro nobis, voluptate quae repellendus ut repellat
            blanditiis, accusamus maiores hic voluptas itaque fugiat eligendi
            tempore.
          </p>
          <button type="button" className="to-about-us-button">
            Read more
          </button>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}images/index/about/about1.jpg`}
          alt="about us image"
          loading="lazy"
        />
      </section>
    </>
  );
}

export default ThirdSection;
