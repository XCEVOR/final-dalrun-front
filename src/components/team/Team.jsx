import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Stephan Bowie",
    designation: "CEO Founder",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Robert Downey Jr",
    designation: "CO Founder",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Laura Lorwence",
    designation: "Project Management",
  },
  {
    delayAnimation: "300",
    img: "team-4",
    title: "David De Berg",
    designation: "Lead of Technical",
  },
  {
    delayAnimation: "0",
    img: "team-5",
    title: "Elena Stephan",
    designation: "SEO/Marketing",
  },
  {
    delayAnimation: "100",
    img: "team-6",
    title: "Andy Robertson",
    designation: "Content Writer",
  },
  {
    delayAnimation: "200",
    img: "new-member",
    title: "",
    designation: "",
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

export default Team;
