import React from "react";

const approachContent = [
  {
    subTitle: "ONE",
    title: "Research",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.`,
    delayAnimation: "0",
  },

  {
    subTitle: "TWO",
    title: "Concept",
    descriptions: `Donec venenatis consequat libero, quis auctor nunc volutpat quis. Proin at ipsum id magna dapibus dictum eget lobortis magna. Fusce et ligula non tellus vulputate condimentum.`,
    delayAnimation: "100",
  },
  {
    subTitle: "THREE",
    title: "Strategy",
    descriptions: `Consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.`,
    delayAnimation: "200",
  },
  {
    subTitle: "FOUR",
    title: "Development",
    descriptions: `Vivamus vel sollicitudin sem, id sagittis justo. Nam non magna eleifend, tempus nisl quis, commod diam. Morbi gravida ut nulla non porttitor. Suspendis eget arcu eu ex dignissim faucibus. Nullam et luctus tortor.`,
    delayAnimation: "300",
  },
  {
    subTitle: "FIVE",
    title: "Test",
    descriptions: `Suspendisse vel magna vitae nunc consequat eleifend. Aenean iaculis Nam non magna eleifend est eget turpis lacinia egest dictum ipsum sollicitudin.Suspendis eget arcu eu ex dignissim faucibus.`,
    delayAnimation: "400",
  },
  {
    subTitle: "SIX",
    title: "Hand Over",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.`,
    delayAnimation: "500",
  },
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
