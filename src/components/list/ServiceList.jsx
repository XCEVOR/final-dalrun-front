import React from "react";
import { Link } from "react-router-dom";

const List = [
  "Branding Design",
  "Advertising",
  "Package Design",
  "Animation",
  "UI/UX Interaction",
  "Mobile Design",
  "Photography",
  "Illustration",
];

const ServiceList = () => {
  return (
    <>
      {List.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))}
    </>
  );
};

export default ServiceList;
