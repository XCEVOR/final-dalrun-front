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
];

const SocialThree = () => {
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
      {/* <!--Social Icon--> */}
    </>
  );
};

export default SocialThree;
