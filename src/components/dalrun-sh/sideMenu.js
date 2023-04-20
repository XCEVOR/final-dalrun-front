import React from "react";
import styled from "styled-components";
import sideMenuItem from "./sideMenuItem";
import { Link, useLocation } from "react-router-dom";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`
const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`

function SideMenu() {

  // URL의 path값을 받아올 수 있다.
  const pathName = useLocation().pathname;

  const menus = [
    { name: "회원정보", path: "/myinform" },
    { name: "내 크루", path: "/mycrew" },
    { name: "내 러닝기록", path: "/myrunning" },
    { name: "내 스토어 구매이력", path: "/mystore"},
    { name: "게시글 내역", path: "/mywrite" },
    { name: "회원 등급", path: "/myrating"}
  ];

  return (
    <div className="sideMenu">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <sideMenuItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
              
            /> {menu.name}
          </Link>
        );
      })}
    </div>
  );
}

export default SideMenu;