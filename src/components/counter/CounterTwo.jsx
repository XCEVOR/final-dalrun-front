import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "25600",
    metaText1: "HAPPY CLIENTS",
    metaText2: "IN 25 YEARS",
    animationDelay: "100",
    colClass: "",
  },
  {
    startCount: "0",
    endCount: "76500",
    metaText1: "PROJECTS COMPLETED ON",
    metaText2: "THE WORLDWIDE",
    animationDelay: "200",
    colClass: "text-xl-end",
  },
];

const CounterTwo = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div className={`col-12 col-xl ${val.colClass}`} key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-2">
              <div className="ptf-counter-up__value">
                {" "}
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
    </>
  );
};

export default CounterTwo;
