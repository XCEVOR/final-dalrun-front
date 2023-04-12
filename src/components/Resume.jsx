import React from "react";

const resumeContent = [
  {
    year: "2014",
    delayAnimation: "",
    infoContent: [
      {
        title: " Bachelor Degree of Design",
        subTitle: "RMIT University",
      },
      {
        title: "UI/UX Design Certificate",
        subTitle: " University of Houston, US",
      },
    ],
  },
  {
    year: "2015 - 2019",
    delayAnimation: "",
    infoContent: [
      {
        title: "Design Internship",
        subTitle: "CMC Corporation, UK",
      },
      {
        title: "Graphic Designer",
        subTitle: "Tripadvisor Ltd, UK",
      },
      {
        title: "Leader Graphic Design",
        subTitle: "New Centery Media JSC, UK",
      },
      {
        title: "Web Designer",
        subTitle: "Freelancer",
      },
      {
        title: "Web Designer/ Author",
        subTitle: "Envato Market",
      },
    ],
  },
  {
    year: "2020 - PRESENT",
    delayAnimation: "",
    infoContent: [
      {
        title: "Product Designe Management",
        subTitle: "Dribbble LLC, US",
      },
      {
        title: "Art Director / Co-Founder",
        subTitle: "Spotify",
      },
      {
        title: "Founder",
        subTitle: "iDesign Magazine",
      },
      {
        title: "Author of The Book",
        subTitle: "Work for Money, Design for Love",
      },
    ],
  },
];

const Resume = () => {
  return (
    <>
      {resumeContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Timeline--> */}
            <div className="ptf-timeline">
              <div className="ptf-timeline__year">{item.year}</div>
              <ul className="ptf-timeline__list">
                {item.infoContent.map((val, i) => (
                  <li className="ptf-timeline__item" key={i}>
                    <h4 className="ptf-timeline__title">{val.title}</h4>
                    <p className="ptf-timeline__description">{val.subTitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
