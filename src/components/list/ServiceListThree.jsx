import React from "react";

const serviceContent = [
  { icon: "lnil-cup", name: "Brand Consultant" },
  { icon: "lnil-website-rank", name: "UI/UX Solution" },
  { icon: "lnil-3d", name: "Packaging" },
  { icon: "lnil-video-camera-alt-1", name: "Motion Video & TVC" },
];

const ServiceListThree = () => {
  return (
    <>
      <ul>
        {serviceContent.map((val, i) => (
          <li key={i}>
            <a href="#">
              <i className={`lnil ${val.icon}`}></i> {val.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceListThree;
