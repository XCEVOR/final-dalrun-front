import React from "react";
import "./StoreRecommendPhoto.scss";

function PhotoText1(props) {
  return (
    <div className="num1">
        <h1>PhotoText1</h1>
        <div className="photo-text-container">
            <div className="photo-container">
                <img src={props.imageSrc} alt={props.imageAlt} />
                <div className="gradation-effect"></div>
            </div>
            <div className="text-container">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  );
}

export default PhotoText1;
