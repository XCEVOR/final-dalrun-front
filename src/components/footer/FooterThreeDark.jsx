import React from "react";
import FooterList from "../list/FooterList";

const FooterThreeDark = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <a href="index.html">
            <img src="assets/img/root/logo-white.png" alt="" loading="lazy" />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <a className="fz-36 has-white-color" href="mailto:hello@moonex.co">
              hello@moonex.co
            </a>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <p className="fz-18 has-3-color">
              90 Fairground Rd, FL 3290, United States
            </p>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterThreeDark;
