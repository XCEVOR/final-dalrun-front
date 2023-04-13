import React from "react";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    demoImg: "about-us",
    routerPath: "/about-us",
    title: "About Us",
    delayAnimationTime: "0",
  },
  {
    demoImg: "about-me",
    routerPath: "/about-me",
    title: "About Me",
    delayAnimationTime: "100",
  },
  {
    demoImg: "services",
    routerPath: "/service",
    title: " Services",
    delayAnimationTime: "200",
  },
  {
    demoImg: "service-details",
    routerPath: "/service-details",
    title: "Service Details",
    delayAnimationTime: "300",
  },
  {
    demoImg: "pricing",
    routerPath: "/pricing",
    title: "Pricing",
    delayAnimationTime: "0",
  },
  {
    demoImg: "team",
    routerPath: "/team",
    title: "Team",
    delayAnimationTime: "100",
  },
  {
    demoImg: "faq",
    routerPath: "/faq",
    title: "FAQ",
    delayAnimationTime: "200",
  },
  {
    demoImg: "contact",
    routerPath: "/contact",
    title: "Contact",
    delayAnimationTime: "300",
  },
  {
    demoImg: "error",
    routerPath: "/404",
    title: "Page 404",
    delayAnimationTime: "0",
  },
  {
    demoImg: "coming-soon",
    routerPath: "/coming-soon",
    title: "Coming Soon",
    delayAnimationTime: "100",
  },
  {
    demoImg: "coming-soon1",
    routerPath: "/team-details",
    title: "Team Details",
    delayAnimationTime: "200",
  },
  {
    demoImg: "coming-soon1",
    routerPath: "/team-details-2",
    title: "Team Details 2",
    delayAnimationTime: "300",
  },
];

const OthersPages = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "2.5rem",
        "--bs-gutter-y": "4.6875rem",
      }}
    >
      {portfolioContent.map((demo, i) => (
        <div className="col-6 col-lg-4 col-xl-3" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={demo.delayAnimationTime}
          >
            {/* <!--Demo Item--> */}
            <div className="ptf-demo-item ptf-demo-item--effect">
              <div className="ptf-demo-item__image">
                <Link
                  to={demo.routerPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`assets/img/root/intro/${demo.demoImg}.png`}
                    alt={demo.title}
                    loading="lazy"
                  />
                </Link>
              </div>
              <h5 className="ptf-demo-item__title">
                <Link
                  to={demo.routerPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {demo.title}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OthersPages;
