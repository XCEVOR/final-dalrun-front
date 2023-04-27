import React from "react";
import Social from "./Social";

const logo = "logo.svg";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">

      <div className="col-12 col-md">
          <img src={logo} alt="" loading="lazy" />
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            
            
          </span>
          . All Rights Reserved.ddd
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <Social/>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
