import React from "react";

const awardContent = [
  {
    date: "2021",
    img: "logo-4",
    delayAnimation: "0",
    awardList: [
      {
        title: "POTY 2021",
        subTitle: "SPA Brand Redesign",
      },
      {
        title: "Design Inspiration #5",
        subTitle: "MNX Business Card",
      },
    ],
  },
  {
    date: "2020",
    img: "logo-2",
    delayAnimation: "100",
    awardList: [
      {
        title: "Websites Of The Year 2020",
        subTitle: "Lewis Studio",
      },
      {
        title: "Websites Of The Month, August 2020",
        subTitle: "Liarch Architecture Firm Website",
      },
      {
        title: "Best 20 Websites Favourite 2020",
        subTitle: "Bauhaus Arc Site",
      },
    ],
  },
  {
    date: "2019",
    img: "logo-3",
    delayAnimation: "200",
    awardList: [
      {
        title: "1st Winner Portfolio Review US 2019",
        subTitle: "Designer Logan Cee",
      },
    ],
  },
];

const Award = () => {
  return (
    <ul
      className="ptf-rewards-list ptf-rewards-list--small"
      style={{
        "--ptf-border-width": "2px",
        "--ptf-border-color": "var(--ptf-color-black)",
      }}
    >
      {awardContent.map((val, i) => (
        <li
          className="ptf-rewards-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="ptf-rewards-item__date">{val.date}</div>
          <div className="ptf-rewards-item__logo">
            <img
              src={`assets/img/root/rewards/${val.img}.png`}
              alt="brand"
              loading="lazy"
            />
          </div>
          {/* End .ptf-rewards-item__logo */}

          <div className="ptf-rewards-item__content">
            {val.awardList.map((list, i) => (
              <div className="ptf-rewards-project" key={i}>
                <div className="ptf-rewards-project__content">
                  <h5>
                    <a href="#">{list.title}</a>
                  </h5>
                  <span>{list.subTitle}</span>
                </div>
                <div className="ptf-rewards-project__link">
                  <a
                    className="ptf-link-with-arrow text-uppercase fz-14"
                    href="#"
                  >
                    See project
                  </a>
                </div>
              </div>
            ))}
            {/* End .ptf-rewards-project */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Award;
