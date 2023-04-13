import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioMenu = [
  "All",
  "Branding",
  "Ui/Ux",
  "Packaging",
  "Illustration",
  "Motion",
  "Animation",
];

const portfolioContent = [
  {
    tabContent: [
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
    ],
  },
  {
    tabContent: [
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
    ],
  },
  {
    tabContent: [
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
    ],
  },
  {
    tabContent: [
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
    ],
  },
  {
    tabContent: [
      {
        cat: "Product",
        title: "Film & Art Festival",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-6",
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
        cat: "Branding, Packaging",
        title: "Dark Wishky Wine",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "work-7",
        dataId: "work-7",
      },
    ],
  },
  {
    tabContent: [
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
    ],
  },
  {
    tabContent: [
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
    ],
  },
];

const PortfolioListing = () => {
  return (
    <>
      <Tabs>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <TabList className="ptf-filters ptf-filters--style-1">
            {portfolioMenu.map((item, i) => (
              <Tab className="filter-item " key={i}>
                {item}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>

        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div className="ptf-isotope-grid">
                <div className=" grid-item ">
                  {/* <!--Portfolio Item--> */}
                  {item.tabContent.map((val, i) => (
                    <article
                      className="ptf-work ptf-work--style-4"
                      data-tip
                      data-for={val.dataId}
                      key={i}
                    >
                      <Link
                        className="ptf-work__link"
                        to="/works-showcase"
                      ></Link>
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
                <div></div>
                {/* End .grid-item */}
              </div>
              {/* End .ptf-isotope-grid */}
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default PortfolioListing;
