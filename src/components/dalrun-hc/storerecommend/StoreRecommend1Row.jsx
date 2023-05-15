import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

import recommstyles from './ImageComponent.module.css';

const StoreRecommend1Row = () => {
  const [isOpen, setOpen] = useState(false);

  let testimg = "BROO-GH15";
  const imageUrl = `http://localhost:3000/dalrun-hc/store/recomproducts/${testimg}/${testimg}-01.png`;


  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
    <div className="ptf-showcase-image store_recomm_cover_image_test" style={{ backgroundImage: `url(${imageUrl})` }} >

          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                <span className="has-accent-1">Bigger</span>, Bolder <br />&
                Better
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              {/* <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p> */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      
    </>
  );
};

export default StoreRecommend1Row;
