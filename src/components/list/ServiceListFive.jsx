import React from "react";
import { Link } from "react-router-dom";

const serviceList = [
  { name: "Branding", number: "17" },
  { name: " Interaction Design", number: "54" },
  { name: "Motion", number: "6" },
  { name: "Illustration", number: "9" },
  { name: "Photography", number: "25" },
];

const ServiceListFive = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-1"
      style={{
        "--ptf-font-family": "var(--ptf-primary-font)",
        "--ptf-font-weight": "300",
      }}
    >
      {serviceList.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">
            {val.name}
            <span>{val.number}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceListFive;
