import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const imageList = [
  {
    img: "content-image-2",
    column: "col-lg-6",
    alt: "image 1",
  },
  {
    img: "content-image-3",
    column: "col-lg-6",
    alt: "image 2",
  },
  {
    img: "content-image-4",
    column: "col-lg-12",
    alt: "image 3",
  },
];

const ImageGridThree = () => {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div
            className="ptf-justified-gallery row"
            style={{
              "--bs-gutter-x": "2rem",
              "--bs-gutter-y": "2rem",
            }}
          >
            {imageList.map((val, i) => (
              <div className={val.column} key={i}>
                <div className="ptf-gallery__item">
                  <div className="ptf-simple-image">
                    <a
                      href={`assets/img/portfolio/single-work/${val.img}.png`}
                      rel="nofollow"
                    >
                      <img
                        src={`assets/img/portfolio/single-work/${val.img}.png`}
                        alt={val.alt}
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
    </>
  );
};

export default ImageGridThree;
