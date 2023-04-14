import React from "react";
import { Link } from "react-router-dom";

const teamContent = [
  {
    delayAnimation: "0",
    img: "work-1",
    title: "Stephan Bowie",
    designation: "CEO Founder",

    routerPath: "/store-detail",
  },
  {
    delayAnimation: "100",
    img: "work-2",
    title: "Robert Downey Jr",
    designation: "CO Founder",

    routerPath: "/store-detail",
  },
  {
    delayAnimation: "200",
    img: "work-3",
    title: "Laura Lorwence",
    designation: "Project Management",

    routerPath: "/store-detail",
  },
  {
    delayAnimation: "300",
    img: "work-4",
    title: "David De Berg",
    designation: "Lead of Technical",

    routerPath: "/store-detail",
  },
  {
    delayAnimation: "0",
    img: "work-5",
    title: "Elena Stephan",
    designation: "SEO/Marketing",

    routerPath: "/store-detail",
  },
  {
    delayAnimation: "100",
    img: "work-6",
    title: "Andy Robertson",
    designation: "Content Writer",

    routerPath: "/store-detail",
  },
  {
    delayAnimation: "200",
    img: "new-member",
    title: "",
    designation: "",

    routerPath: "/store-detail",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              {/* <div className="shadow-effect"></div> */}
              <Link to={val.routerPath} rel="noopener noreferrer">
              {/* <a href="#"> */}
                {" "}
                <img
                  src={`assets/img/dalrun-hc/${val.img}.jpg`}
                  alt={val.title}
                  loading="lazy"
                />
              {/* </a> */}
              </Link>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
