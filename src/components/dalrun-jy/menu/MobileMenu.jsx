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

const login = JSON.parse(localStorage.getItem('login'));
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
    routerPath: "/store-main",

  },
  {

    name: "러닝 코스",
    routerPath: "/coming-soon",

  },
  {
    name: "대회 신청",
    routerPath: "/competition-main",



  },
  {
    name: "러닝화 리뷰",
    routerPath: "/review-main",

  },
  {

    name: "QnA",
    routerPath: "/coming-soon",

  },
  {
    name: "마이페이지",
    dropDownItems: [
      {
        name: "회원정보",
        routerPath: "/mypage/myinform",
      },

      {
        name: "나의 크루",
        routerPath: "/mypage/mycrew",
      },
      {
        name: "러닝 기록",
        routerPath: "/mypage/myrunning",
      },

      {
        name: "스토어 구매 이력",
        routerPath: "/mypage/mystore",
      },

      {
        name: "게시글 내역",
        routerPath: "/mypage/mywrite",
      },
      {
        name: "나의 회원 등급",
        routerPath: "/mypage/myrating",
      },
    ],
  },
  {
    name: "관리자 페이지",
    dropDownItems: [
      {
        name: "대시보드",
        routerPath: "/admin/dashboard",
      },

      {
        name: "회원 관리",
        routerPath: "/admin/members/member",
      },
      {
        name: "게시글 관리",
        routerPath: "/admin/bbs/question/productinquiry",
      },
      {
        name: "쇼핑몰 관리",
        routerPath: "/admin/store/product",
      },
      {
        name: "차트",
        routerPath: "/admin/chart",
      }
    ],
  },
];



const MobileMenu = () => {

  console.log(menuContent)
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <React.Fragment key={i}>
                  {item.dropDownItems !== undefined &&
                  
                    <SubMenu title={item.name} key={item.name} style={{ padding: '10px' }}>

                      {
                        item.dropDownItems.map((val, j) => (
                          <MenuItem key={i+'A'+j}>
                            <Link  to={val.routerPath}>{val.name}</Link>
                          </MenuItem>
                        ))}
                    </SubMenu>
                    ||
                    <li className="pro-menu-item pro-sub-menu"   key={i+'B'} style={{ padding: '10px' }}>
                      <div className="pro-inner-item"   >
                        <span className="pro-item-content"   > {item.name}  </span>
                        <Link   to={item.routerPath}></Link>

                      </div>
                    </li>


                  }
                </React.Fragment>
              )

              )}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          ©{new Date().getFullYear()}{" "}
          Copyright © 달런달런 All rights reserved
        </p>
        <Social />


      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
