import React from "react";
import SocialTwo from "../../social/SocialTwo";

const CopyRightThreeDark = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md">
        <p className="ptf-footer-copyright has-white-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            {" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              rel="noopener noreferrer"
              target="_blank"
            >
              ib-themes
            </a>
          </span>
          . All Rights Reserved.
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-md d-none d-xl-block"></div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          {/* <!--Social Icon--> */}
          <SocialTwo />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightThreeDark;
