import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "95",
    metaText1: "Website design and",
    metaText2: "development",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "98",
    metaText1: "iOs & Android mobile",
    metaText2: "application",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "90",
    metaText1: "Hosting, domain &",
    metaText2: "support",
    animationDelay: "200",
  },
];

const CounterThree = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div className="col-12 col-sm-6 col-md-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div
              className="ptf-counter-up ptf-counter-up--style-3"
              style={{
                "--ptf-title-color": "var(--ptf-color-black)",
              }}
            >
              <h5 className="ptf-counter-up__title">
                {val.metaText1} <br />
                {val.metaText2}
              </h5>
              <div
                className="ptf-counter-up__value"
                data-prefix=""
                data-suffix="%"
              >
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CounterThree;
