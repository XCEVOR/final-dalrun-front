import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import '../css/CrewMemberBody.css';
import { useState } from "react";
import CrewMemberWait from "./CrewMemberWait";

const portfolioMenu = [
  "크루멤버 소개",
  "크루멤버 대기",
];

function CrewMemberBody() {
  const history = useNavigate();
  const [dataList, setDataList] = useState([]);

  function gotoMemberWait(){
    history("/crewMemberWait");
  }

  return (
    
    <div>
      <button>크루멤버 소개</button>
      <button onClick={gotoMemberWait}>크루멤버 대기</button>
      <table>
        <thead>
          <tr>
            <th>프로필사진</th>
            <th>아이디</th>
            <th>등급</th>
          </tr>
        </thead>
       
      </table>
    </div>
  );
}

export default CrewMemberBody;
