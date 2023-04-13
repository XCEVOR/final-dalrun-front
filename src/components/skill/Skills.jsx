import React from "react";

const skillContent = [
  { logo: "image-1", title: "HTML/CSS", delayAnimation: "0" },
  { logo: "image-2", title: "WordPress", delayAnimation: "100" },
  { logo: "image-3", title: "Shopify", delayAnimation: "200" },
  { logo: "image-4", title: "iOS", delayAnimation: "300" },
  { logo: "image-5", title: "Android", delayAnimation: "400" },
  { logo: "image-6", title: "Figma", delayAnimation: "0" },
  { logo: "image-7", title: "Zeplin", delayAnimation: "100" },
];

const Skills = () => {
  return (
    <>
      {skillContent.map((item, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
          key={i}
        >
          {/* <!--Skill Box--> */}
          <div className="ptf-skill-box">
            <div className="ptf-skill-box__content">
              <div className="ptf-skill-box__image">
                <img
                  src={`assets/img/root/skills/${item.logo}.png`}
                  alt="HTML/CSS"
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-skill-box__title">{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
