import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const imageList = [
  { img: "about-us-image-1", delayAnimation: "0" },
  { img: "about-us-image-2", delayAnimation: "100" },
];

const ImageGrid = () => {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
          {imageList.map((val, i) => (
            <div className="col-6" key={i}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay={val.delayAnimation}
              >
                {/* <!--Simple Image--> */}
                <div className="ptf-simple-image">
                  <a href={`assets/img/${val.img}.png`} rel="nofollow">
                    <img
                      src={`assets/img/${val.img}.png`}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default ImageGrid;
