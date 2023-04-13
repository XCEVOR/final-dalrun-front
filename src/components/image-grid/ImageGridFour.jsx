import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const ImageGridFour = () => {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            {/* <!--Simple Image--> */}
            <div className="ptf-simple-image">
              <a
                href="assets/img/service-detail.png"
                data-fancybox
                rel="nofollow"
              >
                <img
                  src="assets/img/service-detail.png"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
};

export default ImageGridFour;
