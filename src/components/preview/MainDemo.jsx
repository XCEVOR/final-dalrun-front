import React from "react";
import { Link } from "react-router-dom";

const demoContent = [
  {
    demoImg: "home-default",
    routerPath: "/home-default",
    title: "Default",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-studio",
    routerPath: "/home-studio",
    title: "Studio",
    delayAnimationTime: "100",
  },
  {
    demoImg: "home-agency",
    routerPath: "/home-agency",
    title: "Agency",
    delayAnimationTime: "200",
  },
  {
    demoImg: "home-dark",
    routerPath: "/home-dark",
    title: "Dark",
    delayAnimationTime: "300",
  },
  {
    demoImg: "home-minimal",
    routerPath: "/home-minimal",
    title: "Minimal",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-freelancer",
    routerPath: "/home-freelancer",
    title: "Freelancer",
    delayAnimationTime: "100",
  },
  {
    demoImg: "home-modern",
    routerPath: "/home-modern",
    title: "Modern",
    delayAnimationTime: "200",
  },
  {
    demoImg: "home-trending",
    routerPath: "/home-trending",
    title: "Trending",
    delayAnimationTime: "300",
  },
];

const MainDemo = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "2.5rem",
        "--bs-gutter-y": "4.6875rem",
      }}
    >
      {demoContent.map((demo, i) => (
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

export default MainDemo;
