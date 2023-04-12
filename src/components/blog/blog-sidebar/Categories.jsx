import React from "react";

const cateContent = [
  { catName: "All", postNumber: "18" },
  { catName: "Inspirations", postNumber: "4" },
  { catName: "Experiences", postNumber: "3" },
  { catName: "Reviews", postNumber: "5" },
  { catName: "Tips & Tricks", postNumber: "1" },
  { catName: "Others", postNumber: "4" },
];
const Categories = () => {
  return (
    <ul>
      {cateContent.map((val, i) => (
        <li key={i}>
          <a href="#">
            {val.catName} <span>{val.postNumber}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
