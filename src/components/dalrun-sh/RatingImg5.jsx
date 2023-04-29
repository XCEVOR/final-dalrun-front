import React from "react";
import baby from "./baby.png";
import child from "./child.png";
import runner from "./runner.png";
import master from "./master.png";
import img from "../../assets/dalrun-sh/scss/img.scss"

const images = [
  {
    src: {baby},
    caption: '걸음마',
  },
  {
    src: {child},
    caption: '런니니',
  },
  {
    src: {runner},
    caption: '러너',
  },
  {
    src: {master},
    caption: '마라토너',
  },
];

const RatingImg = () => {
  return (
    <div className="container">
      <div className="item">
        <img src={baby} alt="걸음마" />
        <div className="caption">걸음마</div>
      </div>
      <div className="item">
        <img src={child} alt="런니니" />
        <div className="caption">런니니</div>
      </div>
      <div className="item">
        <img src={runner} alt="러너" />
        <div className="caption">러너</div>
      </div>
      <div className="item">
        <img src={master} alt="마라토너" />
        <div className="caption">마라토너</div>
      </div>
    </div>
  );
};

export default RatingImg;
