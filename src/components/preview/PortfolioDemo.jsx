import React from "react";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    demoImg: "portfolio-grid",
    routerPath: "/works-grid",
    title: "Portfolio Grid",
    delayAnimationTime: "0",
  },
  {
    demoImg: "portfolio-masonry",
    routerPath: "/works-masonry",
    title: "Portfolio Masonry",
    delayAnimationTime: "100",
  },
  {
    demoImg: "portfolio-listing",
    routerPath: "/works-listing",
    title: " Portfolio Listing",
    delayAnimationTime: "200",
  },
  {
    demoImg: "portfolio-carousel",
    routerPath: "/works-carousel",
    title: "Portfolio Carousel",
    delayAnimationTime: "300",
  },
  {
    demoImg: "project-showcase-1",
    routerPath: "/works-showcase",
    title: "Project Showcase",
    delayAnimationTime: "0",
  },
  {
    demoImg: "coming-soon1",
    routerPath: "/works-showcase-2",
    title: "Project Showcase 2",
    delayAnimationTime: "100",
  },
  {
    demoImg: "coming-soon1",
    routerPath: "/works-showcase-3",
    title: "Project Showcase 3",
    delayAnimationTime: "200",
  },
];

const PortfolioDemo = () => {
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

export default PortfolioDemo;
