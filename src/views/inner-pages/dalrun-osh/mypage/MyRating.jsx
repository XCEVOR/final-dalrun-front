import React from "react";
import RatingImg from "../../../../components/dalrun-sh/RatingImg";

function Rating(){
  return(
    <div className="members container">
      <h4 className="title">내 등급</h4>
      <br />
      <div className="inform outline" />
      <br />
      <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.375rem", "--ptf-md": "1.1875rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-7">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >

                    </div>
                  </div>

                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.75rem" }}
                ></div>

                  <RatingImg />
                  

              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>
      <div>
        당신의 등급은 '런니니' 입니다.
      </div>            
      <br />
      <div className="inform outline" />
      <br />            


      <div>
      걸음마:
      <br /><br />
      런니니:
      <br /><br />
      러너:
      <br /><br />
      마라토너:
      <br /><br />

      </div>
    </div>
    )
}

export default Rating;