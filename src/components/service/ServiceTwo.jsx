import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    delayAnimation: "0",
    title: "Branding",
    serviceList: [
      "Brand Strategy",
      "Consulting",
      "Illustration",
      "Graphic Design",
      "Photography",
    ],
  },
  {
    delayAnimation: "100",
    title: "INTERACTION",
    serviceList: [
      "Mobile Design",
      "UI/UX Web Design",
      "Motion",
      "Animation",
      "System Management",
      "Hosting & Domain",
      "CRM",
    ],
  },
  {
    delayAnimation: "200",
    title: "SOCIAL",
    serviceList: [
      "Marketing Consult",
      "Google Ads",
      "Facebook Ads",
      "Social Media",
    ],
  },
];

const ServiceTwo = () => {
  return (
    <>
      {serviceContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <h6 className="fz-16 text-uppercase has-3-color fw-normal">
              Branding
            </h6>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.8125rem" }}
            ></div>
            {/* <!--Services List--> */}
            <ul className="ptf-services-list ptf-services-list--style-2">
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

export default ServiceTwo;
