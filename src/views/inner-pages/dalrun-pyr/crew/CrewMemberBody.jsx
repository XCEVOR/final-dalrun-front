import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import { Link, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import '../css/CrewMemberBody.css';
import { useState } from "react";
import CrewMemberWait from "./CrewMemberWait";
import { useEffect } from "react";
import axios from "axios";

const portfolioMenu = [
  "크루멤버 소개",
  "크루멤버 대기",
];

function CrewMemberBody() {
  const history = useNavigate();
  const [dataList, setDataList] = useState([]);
  const location = useLocation();
  const crewSeq = location.state.crewSeq;
  const [leader, setLeader] = useState("");

  const login = JSON.parse(localStorage.getItem('login'));

  function gotoMemberWait(){
    history("crewMemberWait", { state:{'crewSeq':crewSeq} });
  }

  const mycrewMemberList = (seq) => {
    axios.get("http://localhost:3000/mycrewMemberList", { params:{'crewSeq': seq} })
    .then((resp) => setDataList(resp.data))
    .catch((err) => alert(err));
  }

  const getLeader = (seq) => {
    axios.get("http://localhost:3000/getLeader", { params:{'crewSeq': seq} })
      .then((resp) => setLeader(resp.data))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    mycrewMemberList(crewSeq);
    getLeader(crewSeq);
  }, []);
  
  return (
    
    <div className="crewmem_introduce">
      <button>크루멤버 소개</button>
      {login.memId === leader ? <button onClick={gotoMemberWait}>크루멤버 대기</button> : ''}
      <table>
        <thead>
          <tr>
            <th style={{width:'300px'}}>프로필사진</th>
            <th>아이디</th>
            <th>등급</th>
            <th>권한</th>
          </tr>
        </thead>
        <tbody>
          {
            dataList.map((crewmem, i) => {
              return(
                <tr key={i}>
                  <td><img src={`http://localhost:3000/dalrun-yr/profiles/${crewmem.profile}`} /></td>
                  <td>{crewmem.memId}</td>
                  <td>{crewmem.grade}</td>
                  <td>{crewmem.memId === leader ? "리더":""}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default CrewMemberBody;
