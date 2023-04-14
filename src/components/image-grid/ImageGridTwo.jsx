import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const imageList = [
  {
    img: "content-image-1",
    delayAnimation: "0",
    imageOwner: "@element5digital",
    link: "https://element5digital.com/",
  },
  {
    img: "content-image-2",
    delayAnimation: "100",
    imageOwner: "@insideweather",
    link: "https://insideweather.com/",
  },
];

const ImageGridTwo = () => {
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
                  <a
                    href={`assets/img/blog/single-post/${val.img}.png`}
                    rel="nofollow"
                  >
                    <img
                      src={`assets/img/blog/single-post/${val.img}.png`}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </div>
                {/* End  .ptf-simple-image */}
                <div className="ptf-simple-image-caption">
                  Image by{" "}
                  <a href={val.link} target="_blank" rel="noopener noreferrer">
                    {val.imageOwner}
                  </a>
                </div>
                {/* End .ptf-simple-image-caption */}
              </div>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default ImageGridTwo;
