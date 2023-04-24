import React, {useState, useRef} from "react";
import styled from "styled-components";
import sideMenuItem from "./sideMenuItem";
import { Link, useLocation  } from "react-router-dom";
// import informIcon from "./assets/dalrun-sh/informIcon.png";
import informIcon from "./informIcon.png";
import crewIcon from "./crewIcon.png";
import gradeIcon from "./gradeIcon.png";
import listIcon from "./listIcon.png";
import runningIcon from "./runningIcon.png";
import shopIcon from "./shopIcon.png";

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
    { name: "회원정보", path: "/mypage/myinform", img: "./informIcon.png" },
    { name: "내 크루", path: "/mypage/mycrew", img: {crewIcon} },
    { name: "내 러닝기록", path: "/mypage/myrunning", img: {runningIcon} },
    { name: "내 스토어 구매이력", path: "/mypage/mystore", img: "./shopIcon.png"},
    { name: "게시글 내역", path: "/mypage/mywrite", img: {listIcon} },
    { name: "회원 등급", path: "/mypage/myrating", img: {gradeIcon}}
  ];

  return (
    //  <Side>
    //    {/* <Profile src={./public/assets/img/dalrun-sh/informIcon.png}></Profile> */}
    //    <Menu>
        <div className="sideMenu">
          {menus.map((menu, index) => {
            return (
              <div className="side-menu-list">

                <a href={menu.path}>
                   <img src={menu.img} style={{  width: 30, height: 30 }}/>                 
                    {menu.name}  <br/><br/>
                </a>

                {/* <Link  to={menu.path} key={index} >
                  <sideMenuItem
                    menu={menu}
                    // isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인                  
                  />

                    
                      <img src={menu.img} style={{  width: 30, height: 30 }}/>                 
                      {menu.name}  <br/><br/>
                
                </Link > */}
              </div>
            );
          })}          

        </div>
    //    </Menu>
    //  </Side>
  );
}

export default SideMenu;