import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "120",
    metaText1: "YEARS OF",
    metaText2: "EXPERIENCE",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "8200",
    metaText1: "SATISFACTION",
    metaText2: "CLIENTS",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "6430",
    metaText1: "EMPLOYEES ON",
    metaText2: "WORLDWIDE",
    animationDelay: "200",
  },
  {
    startCount: "0",
    endCount: "18750",
    metaText1: "PROJECTS COMPLETED",
    metaText2: "ON 60 COUNTRIES",
    animationDelay: "300",
  },
];

const Counter = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {counterUpContent.map((val, i) => (
        <div className="col-6 col-lg-3" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-1">
              <div className="ptf-counter-up__value">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <h5 className="ptf-counter-up__title">
                {val.metaText1} <br />
                {val.metaText2}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
