import React from "react";
import { Link } from "react-router-dom";

const HeroModern = () => {
  return (
    <div className="row align-items-center">
      <div className="col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <p className="fz-16 text-uppercase">Since 1991</p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "1.25rem" }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <h1
            className="large-heading text-uppercase fw-semibold"
            style={{ letterSpacing: "-0.05em" }}
          >
            Moonex <br />
            labs creative <br />
            studio
          </h1>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "4.375rem",
            "--ptf-md": "2.1875rem",
          }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <p className="fz-18" style={{ maxWidth: "27.8125rem" }}>
            We’re from Poland, we passioned with the space & create the values
            sustainable over time.
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>
        <div className="fz-90 has-black-color">
          {/* <!--Animated Block--> */}
          <Link
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="300"
            to="/contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ height: "1em" }}
              viewBox="0 0 17 17"
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
            </svg>
          </Link>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xl": "5.625rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="400"
        >
          <div className="text-center">
            {/* <!--Mask Image--> */}
            <div className="ptf-mask-image">
              <img
                src="assets/img/root/about-us/about-us-main-image-mask.png"
                alt="layer"
                loading="lazy"
                className="lay2"
                style={{
                  zIndex: "1",
                }}
                srcSet="assets/img/about-us-main-image.jpg"
              />
              <img
                src="assets/img/root/about-us/about-us-main-image-layer-1.png"
                alt="layer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default HeroModern;
