import React from "react";
import "./ImgOverlay.scss"; // import CSS file

const ImageOverlay = () => {
  return (
    <div className="image-container">
      <img
        className="background-image"
        src="assets/img/dalrun-hc/store/storedetails/ADID-LIRA-01.png"
        alt="Background"
      />
      <img
        className="overlay-image"
        src="assets/img/dalrun-hc/store/dalrun_award_05.png"
        alt="Overlay"
      />
    </div>
  );
};

export default ImageOverlay;
