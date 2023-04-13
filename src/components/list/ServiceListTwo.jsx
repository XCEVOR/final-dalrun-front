import React from "react";
import { Link } from "react-router-dom";

const ServiceListTwo = () => {
  return (
    <>
      <Link className="has-black-color" to="/service-details">
        {" "}
        Branding
      </Link>
      ,{" "}
      <Link className="has-black-color" to="/service-details">
        UI/UX
      </Link>{" "}
      <br />
      and{" "}
      <Link className="has-black-color" to="/service-details">
        Illustration
      </Link>
    </>
  );
};

export default ServiceListTwo;
