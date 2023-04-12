import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const portfolioMenu = [
  "All",
  "Branding",
  "Packaging",
  "Illustration",
  "Motion",
  "Animation",
];

const portfolioContent = [
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" },
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
      { img: "work-3", meta: "Illustration", title: "LW Poster" },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" },
      { img: "work-5", meta: "Branding, Motion", title: "Dark Wishky Wine" },
    ],
  },
  {
    tabContent: [
      { img: "work-3", meta: "Illustration", title: "LW Poster" },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" },
      { img: "work-5", meta: "Branding, Motion", title: "Dark Wishky Wine" },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" },
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
    ],
  },
  {
    tabContent: [
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
      { img: "work-3", meta: "Illustration", title: "LW Poster" },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" },
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
    ],
  },
  {
    tabContent: [
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" },
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" },
    ],
  },
];

const PortfolioSix = () => {
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
            {/* {/* <!--Animated Block--> */}

            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div
                className="ptf-isotope-grid row"
                style={{
                  "--bs-gutter-x": "4.75rem",
                  "--bs-gutter-y": "4.75rem",
                }}
              >
                {item.tabContent.map((singleItem, i) => (
                  <div className="col-lg-6" key={i}>
                    <article className="ptf-work ptf-work--style-1">
                      <div className="ptf-work__media">
                        <Link
                          className="ptf-work__link"
                          to="/works-showcase"
                        ></Link>
                        <img
                          src={`assets/img/home/modern/${singleItem.img}.png`}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-work__meta">
                        <div className="ptf-work__category">
                          {singleItem.meta}
                        </div>
                        <h4 className="ptf-work__title">
                          <Link to="/works-showcase">{singleItem.title}</Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                ))}
                {/* End .col */}
              </div>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default PortfolioSix;
