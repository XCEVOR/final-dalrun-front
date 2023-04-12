import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1-m",
    title: "Stephan Bowie",
    designation: "CEO Founder",
  },
  {
    delayAnimation: "100",
    img: "team-2-m",
    title: "Robert Downey Jr",
    designation: "CO Founder",
  },
  {
    delayAnimation: "200",
    img: "team-3-m",
    title: "Laura Lorwence",
    designation: "Project Management",
  },
  {
    delayAnimation: "300",
    img: "team-4-m",
    title: "David De Berg",
    designation: "Lead of Technical",
  },
  {
    delayAnimation: "0",
    img: "team-5-m",
    title: "Elena Stephan",
    designation: "SEO/Marketing",
  },
  {
    delayAnimation: "100",
    img: "team-6-m",
    title: "Andy Robertson",
    designation: "Content Writer",
  },
  {
    delayAnimation: "200",
    img: "team-7-m",
    title: "Laura Lorwence",
    designation: "Project Management",
  },
  {
    delayAnimation: "300",
    img: "team-8-m",
    title: "David De Berg",
    designation: "Lead of Technical",
  },
  {
    delayAnimation: "0",
    img: "team-9-m",
    title: "Elena Stephan",
    designation: "SEO/Marketing",
  },
  {
    delayAnimation: "100",
    img: "team-10-m",
    title: "Andy Robertson",
    designation: "Content Writer",
  },
  {
    delayAnimation: "200",
    img: "team-11-m",
    title: "Elena Stephan",
    designation: "SEO/Marketing",
  },
  {
    delayAnimation: "300",
    img: "team-12-m",
    title: "Andy Robertson",
    designation: "Content Writer",
  },
  {
    delayAnimation: "400",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const TeamTwo = () => {
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
          <div className="ptf-team-member">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={`assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
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

export default TeamTwo;
