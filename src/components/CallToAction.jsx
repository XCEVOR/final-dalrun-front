import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <div className="fz-12 has-color-3 text-uppercase">
          Describe your <br />
          project
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.5625rem" }}></div>
        <div className="fz-100 fz-90--md has-black-color fw-normal lh-0p8 has-secondary-font">
          <Link className="ptf-filled-link" to="/contact">
            Call <br />
            Bruno
          </Link>
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
        <div className="fz-60 has-black-color">
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
    </>
  );
};

export default CallToAction;
