import React from "react";
import { Link } from "react-router-dom";
import ServiceListTwo from "../../components/list/ServiceListTwo";
import SocialThree from "../social/SocialThree";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";

const portfolioMenu = [
  { name: "All Projects", number: "11" },
  { name: "Branding", number: "4" },
  { name: "UI/UX Interaction", number: "4" },
  { name: "Motion Video", number: "3" },
  { name: "Illustration", number: "4" },
];

const portfolioContent = [
  {
    tabContent: [
      {
        title: "MNX Business Card",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-4",
        dataId: "work-1",
      },
      {
        title: "SPA Brand",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-2",
        dataId: "work-2",
      },
      {
        title: "Lewis Studio Website",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-3",
        dataId: "work-3",
      },
      {
        title: "LW Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-4",
      },
      {
        title: "Taskly Dashboard",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-5",
      },
      {
        title: "Swiss Style Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-2",
        dataId: "work-6",
      },
      {
        title: "Firm & Art Festival",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-7",
      },
      {
        title: "Dark Whisky Wine",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-1",
        dataId: "work-8",
      },
      {
        title: "Liarch Archicture Firm",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-9",
      },
      {
        title: "Supro Online Store",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-10",
      },
      {
        title: "Andy Grammar Coach",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-1",
        dataId: "work-11",
      },
    ],
  },
  {
    tabContent: [
      {
        title: "Dark Whisky Wine",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-1",
        dataId: "work-8",
      },
      {
        title: "Liarch Archicture Firm",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-9",
      },
      {
        title: "Supro Online Store",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-10",
      },
      {
        title: "Andy Grammar Coach",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-1",
        dataId: "work-11",
      },
    ],
  },
  {
    tabContent: [
      {
        title: "LW Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-4",
      },
      {
        title: "Taskly Dashboard",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-5",
      },
      {
        title: "Swiss Style Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-2",
        dataId: "work-6",
      },
      {
        title: "Firm & Art Festival",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-7",
      },
    ],
  },
  {
    tabContent: [
      {
        title: "MNX Business Card",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-4",
        dataId: "work-1",
      },
      {
        title: "SPA Brand",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-2",
        dataId: "work-2",
      },
      {
        title: "Lewis Studio Website",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-3",
        dataId: "work-3",
      },
    ],
  },
  {
    tabContent: [
      {
        title: "Taskly Dashboard",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-5",
      },
      {
        title: "Swiss Style Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-2",
        dataId: "work-6",
      },
      {
        title: "Firm & Art Festival",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-7",
      },
      {
        title: "Dark Whisky Wine",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "work-1",
        dataId: "work-8",
      },
    ],
  },
];

const PortfolioFour = () => {
  return (
    <Tabs>
      <div className="row">
        <div className="col-xl-4">
          <div className="sticky-parent">
            <div className="sticky-column">
              <h1 className="fw-light">
                An Award <br />
                Winning Digital <br />
                Studio
              </h1>
              {/* <!--Spacer--> */}

              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "3.75rem",
                  "--ptf-md": "1.875rem",
                }}
              ></div>

              <TabList className="ptf-filters ptf-filters--style-3">
                {portfolioMenu.map((item, i) => (
                  <Tab className="filter-item" key={i}>
                    {item.name}
                    <span className="filter-counter">{item.number}</span>
                  </Tab>
                ))}
              </TabList>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              {/* <!--Spacer--> */}

              <p className="fz-20">
                We’re expert in <ServiceListTwo />
              </p>

              {/* End .ptf-filters */}

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="has-black-color">
                <SocialThree />
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-7 offset-xl-1">
          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            style={{ "--ptf-xl": "5.625rem", "--ptf-md": "2.8125rem" }}
          ></div>
          <div className="ptf-isotope-grid">
            {portfolioContent.map((item, i) => (
              <TabPanel key={i}>
                {item.tabContent.map((val, i) => (
                  <div className=" grid-item" key={i}>
                    {/* <!--Portfolio Item--> */}
                    <article
                      className="ptf-work ptf-work--style-5"
                      data-tip
                      data-for={val.dataId}
                      key={i}
                    >
                      <Link to="/works-showcase" className="ptf-work__link">
                        {" "}
                      </Link>
                      <ReactTooltip
                        id={val.dataId}
                        place="right"
                        type="dark"
                        effect="float"
                      >
                        <div className="poup-link">
                          <img
                            src={`assets/img/portfolio/${val.imgPopup}.png`}
                            alt="popup"
                          />
                        </div>
                      </ReactTooltip>
                      <div className="ptf-work__date">{val.date}</div>
                      <h4 className="ptf-work__title">{val.title}</h4>
                    </article>
                  </div>
                ))}
              </TabPanel>
            ))}
          </div>
        </div>
        {/* End .col */}
      </div>
    </Tabs>
  );
};

export default PortfolioFour;
