import React from "react";
import SocialTwo from "../social/SocialTwo";

const FooterFour = () => {
  return (
    <div className="ptf-footer__top">
      <div className="row">
        <div
          className="
              col-12 col-lg
              d-flex
              justify-content-center justify-content-lg-start
            "
        >
          <p className="ptf-footer-copyright has-black-color">
            &copy; {new Date().getFullYear()} <span>Moonex</span>. All Rights
            Reserved.
          </p>
        </div>
        {/* End .col */}

        <div className="col-12 col-lg d-flex justify-content-center">
          <div className="ptf-widget ptf-widget-text has-black-color">
            <a href="mailto:ibthemes21@gmail.com">ibthemes21@gmail.com</a>
          </div>
        </div>
        {/* End .col */}

        <div
          className="
              col-12 col-lg
              d-flex
              justify-content-center justify-content-lg-end
            "
        >
          <div className="ptf-footer-socials has-black-color">
            {/* <!--Social Icon--> */}
            <SocialTwo />
          </div>
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default FooterFour;
