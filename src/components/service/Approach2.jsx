import React from "react";

const approachContent = [
  {
    title: "Partnership",
    descriptions: `We believe in design partnership and co-creation. We like to discuss,
      plan and be a part of your team.`,
    delayAnimation: "0",
  },
  {
    title: "Clossness",
    descriptions: `We believe in design partnership and co-creation. We like to discuss,
      plan and be a part of your team.`,
    delayAnimation: "100",
  },
  {
    title: "Future",
    descriptions: `We believe in design partnership and co-creation. We like to discuss,
      plan and be a part of your team.`,
    delayAnimation: "200",
  },
  {
    title: "Commitment",
    descriptions: `We believe in design partnership and co-creation. We like to discuss,
      plan and be a part of your team.`,
    delayAnimation: "300",
  },
];

const Approach2 = () => {
  return (
    <ul className="ptf-process-steps">
      {approachContent.map((val, i) => (
        <li
          className="ptf-process-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <h6 className="ptf-process-item__title">{val.title}</h6>
          <p className="ptf-process-item__text">{val.descriptions}</p>
        </li>
      ))}
    </ul>
  );
};

export default Approach2;
