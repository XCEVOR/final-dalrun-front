import React from "react";

const socialList = [
  {
    iconName: "socicon-twitter",
    link: "https://twitter.com/",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/",
  },
  {
    iconName: "socicon-pinterest",
    link: "https://www.pinterest.com/",
  },
  {
    iconName: "socicon-dribbble",
    link: "https://dribbble.com/",
  },
];

const SocialTwo = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
