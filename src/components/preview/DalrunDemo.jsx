import React from "react";
import { Link } from "react-router-dom";

const demoContent = [
  {
    demoImg: "home-default",
    routerPath: "/mjy-work",
    title: "준영",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-studio",
    routerPath: "/kjw-work",
    title: "종완",
    delayAnimationTime: "100",
  },
  {
    demoImg: "home-agency",
    routerPath: "/asj-work",
    title: "선정",
    delayAnimationTime: "200",
  },
  {
    demoImg: "home-dark",
    routerPath: "/pyr-work",
    title: "예린",
    delayAnimationTime: "300",
  },
  {
    demoImg: "home-minimal",
    routerPath: "/chc-work",
    title: "호찬",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-freelancer",
    routerPath: "/osh-work",
    title: "성혁",
    delayAnimationTime: "100",
  },
  // {
  //   demoImg: "home-modern",
  //   routerPath: "/home-modern",
  //   title: "Modern",
  //   delayAnimationTime: "200",
  // },
  // {
  //   demoImg: "home-trending",
  //   routerPath: "/home-trending",
  //   title: "Trending",
  //   delayAnimationTime: "300",
  // },
];

const DalrunDemo = () => {
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

export default DalrunDemo;