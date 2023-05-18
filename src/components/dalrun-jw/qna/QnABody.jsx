import React, { useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import AdminPagination from '../../dalrun-asj/AdminPagination';

const portfolioMenu = [
  "일반",
  "쇼핑몰 관련",
];

const portfolioContent = [
  {
    tabContent: [
      {
        cat: "kim1",
        title: "다이어리 업로드 어떻게 해요? ",
        date: "2023.05.18",
        routerLink: "/portfolio-details",
        dataId: "work-1",
      },
      {
        cat: "kim36",
        title: "대구 지역 대회 정보 좀 주세요",
        date: "2023.05.15",
        routerLink: "/portfolio-details",
        dataId: "work-2",
      },
      {
        cat: "kim5",
        title: "혹시 등업 조건이 어떻게 되나요?",
        date: "2023.05.12",
        routerLink: "/portfolio-details",
        dataId: "work-3",
      },
      {
        cat: "kim3",
        title: "부상 관련 질문입니다.",
        date: "2023.05.09",
        routerLink: "/portfolio-details",
        dataId: "work-4",
      },
      {
        cat: "kim6",
        title: "신발을 대량 구매하려는데요,,,,",
        date: "2023.05.06",
        routerLink: "/portfolio-details",
        dataId: "work-5",
      },
      {
        cat: "kim7",
        title: "춘천 쪽 코스도 추천해주세요!!!",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        dataId: "work-6",
      },
      {
        cat: "kim3",
        title: "",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        imgPopup: "work-7",
        dataId: "work-7",
      },
    ],
  },
  {
    tabContent: [
      {
        cat: "kim 5",
        title: "질문 3",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        imgPopup: "work-3",
        dataId: "work-3",
      },
      {
        cat: "kim9",
        title: "질문 3",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        imgPopup: "work-4",
        dataId: "work-4",
      },
      {
        cat: "kim5",
        title: "배",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-5",
      },
    ],
  },
  {
    tabContent: [
      {
        cat: "park1234",
        title: "질문 3",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        imgPopup: "work-5",
        dataId: "work-5",
      },
      {
        cat: "park1234",
        title: "뉴발란스 프레쉬폼 언제 재입고 예정인가요?",
        date: "2023.04.25",
        routerLink: "/portfolio-details",
        imgPopup: "work-6",
        dataId: "work-6",
      },
      {
        cat: "park1234",
        title: "배송 관련 문의드립니다.",
        date: "2023.04.25",
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

const QnABody = () => {
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(25);

  const handlePagination = (selectedPage) =>{
    setPage(selectedPage);
  }
  
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
                      <div className="ptf-work__category">{val.cat}</div>
                      <h5 className="ptf-work__title">{val.title}</h5>
                      <div className="ptf-work__date">{val.date}</div>
                    </article>
                  ))}
                </div>
                <div></div>
                {/* End .grid-item */}
              </div>
              {/* End .ptf-isotope-grid */}
            </div>
            <div className='diary-list-pagination'>
                  <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination}/>
                </div>
            {/* End portfolio */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default QnABody;