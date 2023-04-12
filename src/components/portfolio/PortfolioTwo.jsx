import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    cat: "Branding",
    title: "Supro Online Store",
    date: "2021",
    routerLink: "/portfolio-details",
    imgPopup: "work-1",
    dataId: "work-1",
  },
  {
    cat: "Illustration",
    title: "LW Poster",
    date: "2020",
    routerLink: "/portfolio-details",
    imgPopup: "work-2",
    dataId: "work-2",
  },
  {
    cat: "Branding, UI/UX",
    title: "Lewis Studio Website",
    date: "2020",
    routerLink: "/portfolio-details",
    imgPopup: "work-3",
    dataId: "work-3",
  },
  {
    cat: "Branding, Packing, Motion",
    title: "SPA Brand",
    date: "2021",
    routerLink: "/portfolio-details",
    imgPopup: "work-4",
    dataId: "work-4",
  },
  {
    cat: "UI/UX",
    title: "Taskly Dashboard",
    date: "2020",
    routerLink: "/portfolio-details",
    imgPopup: "work-5",
    dataId: "work-5",
  },
  {
    cat: "Product",
    title: "Film & Art Festival",
    date: "2020",
    routerLink: "/portfolio-details",
    imgPopup: "work-6",
    dataId: "work-6",
  },
  {
    cat: "Branding, Packaging",
    title: "Dark Wishky Wine",
    date: "2020",
    routerLink: "/portfolio-details",
    imgPopup: "work-7",
    dataId: "work-7",
  },
];

const PortfolioTwo = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContent.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-for={val.dataId}
            key={i}
          >
            <Link className="ptf-work__link" to="/works-showcase"></Link>
            <ReactTooltip
              id={val.dataId}
              place="right"
              type="dark"
              effect="float"
            >
              <div className="poup-link">
                <img
                  src={`assets/img/portfolio/grid/${val.imgPopup}.png`}
                  alt="popup"
                />
              </div>
            </ReactTooltip>
            <div className="ptf-work__category">{val.cat}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            <div className="ptf-work__date">{val.date}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default PortfolioTwo;
