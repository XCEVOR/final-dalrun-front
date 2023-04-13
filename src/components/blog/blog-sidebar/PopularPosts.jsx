import React from "react";
import { Link } from "react-router-dom";

const postContent = [
  {
    postNumber: "1",
    catName: "Inspiration",
    title: "Minimalist Trends",
  },
  {
    postNumber: "2",
    catName: "News",
    title: "Contrast in Brand Design",
  },
  {
    postNumber: "3",
    catName: "Product",
    title: "The evolution of Swiss style in ...",
  },
  {
    postNumber: "4",
    catName: "Others",
    title: "Site inspiration with Swiss style",
  },
];

const PopularPosts = () => {
  return (
    <>
      {postContent.map((val, i) => (
        <Link className="ptf-popular-post" to="/blog-details" key={i}>
          <div className="ptf-popular-post__number">{val.postNumber}</div>
          <div className="ptf-popular-post__content">
            <span className="cat">{val.catName}</span>
            <h6>{val.title}</h6>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PopularPosts;
