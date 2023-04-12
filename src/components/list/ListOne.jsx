import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Branding & Strategy",
  "3D Packaging",
  "Illustration",
  "UI/UX Website Design",
  "UI/UX Mobile Design",
  "Motion TVC",
];

const ListOne = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOne;
