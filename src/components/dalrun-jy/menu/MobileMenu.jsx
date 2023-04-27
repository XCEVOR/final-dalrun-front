import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../footer/Social";

const menuContent = [
  {
    name: "메인 페이지",
    dropDownItems: [
      {
        name: "메인 페이지",
        routerPath: "/mainpage",
      },
      {
        name: "도트맵 페이지",
        routerPath: "/dotMap",
      },
    
    ],
  },
  {
    name: "러닝 다이어리",
    dropDownItems: [
      {
        name: "러닝 다이어리",
        routerPath: "/diary",
      },
      {
        name: "나의 기록",
        routerPath: "/diary",
      },
      {
        name: "업로드 등록방법",
        routerPath: "/diary",
      },
      
      
    ],
  },
  {
    name: "스토어",
    dropDownItems: [
      {
        name: "스토어",
        routerPath: "/store-main",
      },
      {
        name: "장바구니",
        routerPath: "/store-main",
      },
    ],
  },
  {
    name: "러닝 코스 추천",
    dropDownItems: [
      {
        name: "러닝 코스",
        routerPath: "/coming-soon",
      },
    
      {
        name: "coming-soon",
        routerPath: "/coming-soon",
      },
    ],
  },
  {
    name: "대회 신청",
    dropDownItems: [
      {
        name: "대회 일정",
        routerPath: "/competition-main",
      },
    
      {
        name: "Coming Soon",
        routerPath: "/coming-soon",
      },
    ],
  },
  {
    name: "러닝화 리뷰",
    dropDownItems: [
      {
        name: "러닝화 리뷰",
        routerPath: "/coming-soon",
      },
    
      {
        name: "리뷰 작성",
        routerPath: "/coming-soon",
      },
    ],
  },
  {
    name: "QnA",
    dropDownItems: [
      {
        name: "QnA 게시판",
        routerPath: "/coming-soon",
      },
    
      {
        name: "coming-soon",
        routerPath: "/coming-soon",
      },
    ],
  },
  {
    name: "마이페이지",
    dropDownItems: [
      {
        name: "마이페이지",
        routerPath: "/coming-soon",
      },
    
      {
        name: "coming-soon",
        routerPath: "/coming-soon",
      },
    ],
  },
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Moonex</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
          </span>
          .
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
