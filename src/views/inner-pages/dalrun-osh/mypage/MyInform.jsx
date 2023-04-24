import React, { Component } from "react";
import SideMenu from "../../../../components/dalrun-sh/sideMenu";

function Inform() {

  return(
    <div className="dashboard container">
      <span className="title">회원정보</span>
      <span />
      <div className="dashboard-content">
        <div className="todolist outline">
          <span className="subtitle">오늘 할 일</span>
        </div><br />
        <div className="summary">
          <div className="visiter outline">
            <span className="subtitle">방문자 현황</span>
          </div>
          <div className="week outline">
            <span className="subtitle">일자별 요약</span>
          </div>
        </div>
      </div>
    </div>
 
    );
}

export default Inform;