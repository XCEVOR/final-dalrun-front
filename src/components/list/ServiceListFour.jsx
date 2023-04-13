import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    delayAnimation: "200",
    serviceList: ["Branding", "UI/UX", "Photography", "Animation"],
  },
  {
    delayAnimation: "300",
    serviceList: ["Illustration", " SEO/Marketing"],
  },
];

const ServiceListFour = () => {
  return (
    <>
      {serviceContent.map((item, i) => (
        <div className="col-md-6 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Services List--> */}
            <ul
              className="ptf-services-list ptf-services-list--style-4"
              style={{
                "--ptf-font-family": "var(--ptf-primary-font)",
              }}
            >
              {item.serviceList.map((val, i) => (
                <li key={i}>
                  <Link to="/service-details">{val}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceListFour;
