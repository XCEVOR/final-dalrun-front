import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams,  useLocation} from "react-router-dom";
import '../css/CrewMemberBody.css';
import axios from 'axios';
import CrewMemberWait from "./CrewMemberWait";
import { Table } from "react-bootstrap";
import '../css/CrewBbsBlogDetils.css';

const portfolioMenu = [
  "크루멤버 소개",
  "크루멤버 대기",
];

function CrewMemberBody() {

    const params = useParams();
    // 로그인 정보
    const [login, setLogin] = useState([]);
    // 크루 정보
    const [mycrewinfo, setMycrewinfo] = useState([]);
  
    // 나의 멤버 크루 리스트
    const [crewList, setCrewList] = useState([]);

    const history = useNavigate();
    const location = useLocation();
    const { crewSeq } = useParams();
    const [leader, setLeader] = useState("");

    function gotoMemberWait(){
      history("/crewMemberWait", { state:{'crewSeq':crewSeq} });
    }

    // 나의 크루 정보 가져오기
    function getMyCrewinfo(crewSeq) {
    axios.get("http://localhost:3000/getMyCrewinfo", { params: { 'crewSeq': crewSeq } })
      .then(function (resp) {
        setMycrewinfo(resp.data);
  
      }).catch(function (err) {
  
      })
  };
  
  // 나의 크루 정보 가져오기
  function mycrewMemberList(crewSeq) {
    axios.get("http://localhost:3000/mycrewMemberList", { params: { 'crewSeq': crewSeq } })
      .then(function (resp) {
        setCrewList(resp.data);
        
      }).catch(function (err) {
  
      })
  };
  function loading() {
    const logindata = JSON.parse(localStorage.getItem('login'));
    if (logindata) {
      console.log(logindata.memId, "님이 접속하였습니다..")
      setLogin(logindata);
      let crewSeq = params.crewSeq
      getMyCrewinfo(crewSeq);
      mycrewMemberList(crewSeq);
      // getcrewPoint(crewSeq);
    }
  }

  const getLeader = (crewSeq) => {
    axios.get("http://localhost:3000/getLeader", { params:{'crewSeq': crewSeq} })
      .then((resp) => setLeader(resp.data))
      .catch((err) => alert(err));
  }
  
  useEffect(() => {
    //console.log(mycrewinfo)
    //localStorage.removeItem('login');
  
    loading();
    getLeader(crewSeq);
  },[]);
  
  
  return (
    
    <div>
      <button className="btn btn-dalrun">크루멤버 소개</button>
      {login.memId === leader ? <button type="button" className="btn btn-dalrun" style={{ marginLeft: '10px' }} onClick={gotoMemberWait}>크루멤버 대기</button> : ''}
      <Table striped bordered hover > 
              <thead >
                <tr className="center">          
                  <th>번호</th>
                  <th>프로필</th>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>직책</th>
                  <th>등급</th>
                  <th>포인트</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {
                  crewList.map((crew, i) => {
                    return (
                      <tr key={i}  className="center">

                        <td>{i + 1}</td>
                        <td style={{
                          backgroundImage:`url(http://localhost:3000/dalrun-yr/profiles/`+crew.profile,
                          backgroundSize:'cover',backgroundPosition:'center',height:'100px'

                          }}>
                          
                          
                        </td>
                        <td > {crew.memberName}</td>
                        <td >{crew.memId}</td>
                        <td >
                            {crew.memId === mycrewinfo.memId ? "리더" : "팀원"} 
                        </td>
                        <td>{crew.grade}</td>
                        <td >{crew.point}</td>
                        <td >{crew.regdate.split("T")[0]}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>

    </div>
  );
}

export default CrewMemberBody;