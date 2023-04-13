import React from "react";

const heroImg = "assets/img/home/dark/home-dark-main-image.jpg";
const circleText = "assets/img/root/home-dark/circle-text.png";
const circleLogo = "assets/img/root/home-dark/circle-logo.png";
const heroContent = {
  text1: " Bigger",
  text2: " Bolder and",
  text3: " Better",
  descriptions: `We’re from Poland, we passioned with the space & create the values
  vsustainable over time.`,
};

const HeroDark = () => {
  return (
    <div className="row align-items-center">
      <div className="col-xl-5 offset-xl-1 order-xl-2 text-xl-end text-lg-center position-relative">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-custom--1734">
            {/* <!--Mask Image--> */}
            <div
              className="ptf-mask-image mx-auto"
              style={{ maxWidth: "18.25rem" }}
            >
              <img
                className="spin"
                src={circleText}
                alt="circle"
                loading="lazy"
              />
              <img src={circleLogo} alt="circle" loading="lazy" />
            </div>
          </div>
          <div className="ptf-custom--1560">
            {/* <!--Mask Image--> */}
            <div className="ptf-mask-image">
              <img
                src="assets/img/root/home-dark/home-dark-main-image-mask.png"
                alt="layer"
                loading="lazy"
                className="lay3"
                style={{
                  zIndex: "1",
                }}
                srcSet={heroImg}
              />
              <img
                src="assets/img/root/home-dark/home-dark-main-image-layer-1.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-120 fz-90--lg lh-1p1 fw-normal has-white-color">
            {heroContent.text1}, <br />
            {heroContent.text2} <br />
            {heroContent.text3}
          </h1>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p className="fz-24 has-white-color" style={{ maxWidth: "37.5rem" }}>
            {heroContent.descriptions}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="fz-90 has-white-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ height: "1em" }}
              viewBox="0 0 17 17"
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
            </svg>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default HeroDark;
