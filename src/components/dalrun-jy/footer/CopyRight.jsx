import React from "react";
import Social from "./Social";

const logo = "logo.png";

const CopyRight = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-2 col-md">
          <a href="/mainPage">
          <img style={{display:'inline' , marginRight:'50px', width:'120px'}} src={logo} alt="" loading="lazy"  />
          </a>
          <span>
            달런달런 | 팀장: 안선정 | 팀원: 장호찬,김종완,오성혁,박예린,문준영 <br></br>

            </span>
           
        </div>
      </div>

      <div className="row align-items-center justify-content-center">


        <div className="col-5 col-md">
          <p className="ptf-footer-copyright has-black-color">

            스폰서   &nbsp;&nbsp;&nbsp;
            <img
              src="assets/img/dalrun-jy/mulcamlogo.jpg"
              style={{ width: '200px'  }}
            >
            </img>

          </p>
        </div>

        <div className="col-5 col-md">
          <p className="ptf-footer-copyright has-black-color">
            ©{new Date().getFullYear()}{" "}
            Copyright © 달런달런 All rights reserved
          </p>

        </div>
      <div className="col-5 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <Social />
        </div>
      </div>
      </div>


    </>
  );
};

export default CopyRight;


