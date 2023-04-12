import React from "react";

const heroContent = {
  text1: "Bruno Erdison",
  text2: " UI/UX Interaction Designer",
  text3: " Based in Poland",
};

const HeroFreelancer = () => {
  return (
    <div className="col-xl-10 offset-xl-1">
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <h1
          className="
              large-heading
              has-secondary-font
              fw-normal
              text-center
            "
        >
          {heroContent.text1} <br />
          {heroContent.text2}
          <br />
          {heroContent.text3}
        </h1>
      </div>
    </div>
  );
};

export default HeroFreelancer;
